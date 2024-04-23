import React from "react"
import useGlobalStore from "../../store/store.js";
import './bookCard.css';



const BookCard = (props) => {
    const variables = useGlobalStore((state) => state.variables);
    
    return (

    <div className="book-card">
        <div className="photo-book">
            <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="image-book" alt="..."/>
        </div>
        <div className="info-book">  
           <div className="column">
            <p className="book-info">Título del libro: {props.title}</p>
            <p className="book-info">Autor: {props.author}</p>
           </div>
           <div className="column">
            <p className="book-info">Género: {props.genre}</p>
            <p className="book-info">Año de publicación: {props.publishedYear}</p>
            <p className="book-info">Tipo: {props.type}</p>
           </div>
           <div className="column">
            <p className="book-info">Estado: {props.state}</p>
            <p className="book-info">Tamaño: {props.size}</p>
           </div>
        </div>
        <div className="buttons">
            <button className="btn-edit" /*onClick={() => variables.editBook(props.id)}*/>Editar</button>
            <button className="btn-edit" onClick={() => variables.deleteBook(props.id)}>Eliminar</button>
        </div>  
    </div>

    
    )
}
    export default BookCard;
