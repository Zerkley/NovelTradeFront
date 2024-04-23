import React, { useEffect } from "react"
import UseGlobalStore from "../../store/store.js";
import './profilePage.css';
import BookCard from "../../components/bookCard/bookCard.jsx";


const ProfilePage = (props) => {

    const variables = UseGlobalStore((state) => state.variables);
    const profileInfo = variables.person;
    const userBooks = variables.userBooks;
    const editUser = variables.editUser();
  
    useEffect( () => {
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
            <button className="btn-edit" onClick={() => variables.editUser(props.id)}>Editar</button>
        </div>
        <button className="btn-edit" >+ Añade un libro</button>
      
        <div className="books-in-profile">
        {userBooks === null || userBooks.lenght === 0 ? (  
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