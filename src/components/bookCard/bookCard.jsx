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
            <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="image-book" alt="..."/>
        </div>
        <div className="info-book">  
           <h5 className="book-title">Titulo del libro</h5>
           <p className="card-info">Autor</p>
        </div>
        <div className="buttons">
            <button className="btn-edit" >Editar</button>
            <button className="btn-edit" >Intercambiar</button>
        </div>  
    </div>

    
    )
}
    export default BookCard;
