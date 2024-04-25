import React, { useEffect, useState } from "react"
import UseGlobalStore from "../../store/store.js";
import './profilePage.css';
import BookCard from "../../components/bookCard/bookCard.jsx";
import Addbook from "../../components/addBook/AddBook.jsx";
import EditUser from "../../components/editUser/editUser.jsx";



const ProfilePage = (props) => {

    const variables = UseGlobalStore((state) => state.variables);
    const profileInfo = variables.person;
    const userBooks = variables.userBooks;
    // const editUser = variables.editUser();

    //codigo para abrir el modal de añadir libro, borrar cuando termine la prueba
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    // aqui termina el codigo del modal
  
    useEffect( () => {
      console.log(variables.userId)
      variables.getUserBooks();
      variables.getProfileInfo();
    },[]);
  
    
    return (
      <div className="">
        <div className="profile">
            <div className="col-4">
              <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="image-profile" alt="..."/>
            </div>
            <div className="col-6">  
              <h5 className="card-title"> {profileInfo.name}</h5>
              <p className="card-info">✉ {profileInfo.email}</p>
              <p className="card-info">✆ {profileInfo.phoneNumber}</p>
              <p className="card-info">📫 {profileInfo.city}</p>
            </div>  
            <button className="btn-edit" onClick={openModal}>Editar
              <EditUser isOpen={isModalOpen} onRequestClose={closeModal} />
            </button>
        </div>
            <button className="btn-edit" onClick={openModal} >+ Añade un libro
              <Addbook isOpen={isModalOpen} onRequestClose={closeModal} />
            </button>
      
        <div className="books-in-profile">
        {userBooks === null || userBooks?.length === 0 ? (  
           <p className="empty">Aún no has añadido ningún libro</p>
        ) : ( userBooks?.map((book, index) => {
            return (
              <BookCard
                id={book._id}
                key={index}
                title={book.title}
                type={book.type}
                author={book.author}
                genre={book.genre}
                publishedYear={book.publishedYear}
                picture={book.picture}
                state={book.state}
                size={book.size}
              />
            );
          }) )}
        </div>
      </div>
    
    );
  };
  
  export default ProfilePage;