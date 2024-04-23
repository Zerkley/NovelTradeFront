import React from "react"
import useGlobalStore from "../../store/store.js";
import './bookCard.css';



const BookCard = () => {
   /* const variables = UseGlobalStore((state) => state.variables)
    const funciones = UseGlobalStore((state) => state.functions)

    */
  
    return (

    <div className="book-card">
        <div className="photo-book">
            <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" /*{item.picture} */ className="image-book" alt="..."/>
        </div>
        <div className="info-book">  
           <h5 className="book-title">Titulo del libro{item.title}</h5>
           <p className="book-info">Autor{item.author}</p>
           <p className="book-info">genre{item.genre}</p>
           <p className="book-info">publishedYear{item.publishedYear}</p>
           <p className="book-info">type{item.type}</p>
           <p className="book-info">state{item.state}</p>
           <p className="book-info">size{item.size}</p>
        </div>
        <div className="buttons">
            <button className="btn-edit" >Editar</button>
            <button className="btn-edit" >Intercambiar</button>
            <button className="btn-edit" >Eliminar</button>
        </div>  
    </div>

    
    )
}
    export default BookCard;
