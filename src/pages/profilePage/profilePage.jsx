import React, { useEffect } from "react"
import UseGlobalStore from "../../store/store.js";
import './profilePage.css';
import BookCard from "../../components/bookCard/bookCard.jsx";


const ProfilePage = () => {

    const variables = UseGlobalStore((state) => state.variables);
    const profileInfo = variables.person;
  
    useEffect(async () => {
      const people = variables.getProfileInfo("");
    },[]);
  
    return (
      <>
        <div className="profile">
            <div className="col-4">
              <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="image-profile" alt="..."/>
            </div>
            <div className="col-6">  
              <h5 className="card-title">Nombre {profileInfo.name}</h5>
              <p className="card-info">✉ {profileInfo.email}</p>
              <p className="card-info">✆ {profileInfo.phoneNumber}</p>
              <p className="card-info">📫 {profileInfo.city}</p>
            </div>  
            <button className="btn-edit" >Editar</button>
        </div>
        <button className="btn-edit" >+ Añade un libro</button>
      
        <div className="books-in-profile">
          <p className="empty">Aún no has añadido ningún libro</p>
          <BookCard />
        </div>
      </>
    );
  };
  
  export default ProfilePage;