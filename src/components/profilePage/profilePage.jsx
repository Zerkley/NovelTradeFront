import React from "react"
import UseGlobalStore from "../../store/store.js";
import './profilePage.css';
import BookCard from "../bookCard/bookCard.jsx";


const ProfilePage = () => {
    const variables = UseGlobalStore((state) => state.variables)
    const funciones = UseGlobalStore((state) => state.functions)
    const miMadre = funciones.getProfileInfo();
    
  
    return (
<>
    <div className="profile">
        <div className="col-4">
            <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="image-profile" alt="..."/>
        </div>
        <div className="col-6">  
           <h5 className="card-title">{miMadre}Nombre y apellidos</h5>
           <p className="card-info">✉ email@gmail.com</p>
           <p className="card-info">✆ 666-666-666</p>
           <p className="card-info">📫 Dirección</p>
          
        </div>  
        <button className="btn-edit" >Editar</button>
    </div>
    <button className="btn-edit" >+ Añade un libro</button>
    
    <div className="books-in-profile">
        <p className="empty">Aún no has añadido ningún libro</p>
        <BookCard />
    </div>
    </>
    )
}
    export default ProfilePage;
