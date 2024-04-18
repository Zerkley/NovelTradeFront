import React from "react"
import useGlobalStore from "../../store/store.js";
import './bookCard.css';



const BookCard = () => {
   /* const variables = UseGlobalStore((state) => state.variables)
    const funciones = UseGlobalStore((state) => state.functions)

    */
  
    return (

    <div className="profile">
        <div className="col-4">
            <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="image-profile" alt="..."/>
        </div>
        <div className="col-6">  
           <h5 className="card-title">Nombre y Apellidos</h5>
           <p className="card-info">✉ email@gmail.com</p>
           <p className="card-info">✆ 666-666-666</p>
           <p className="card-info">📫 Dirección</p>
          <button className="btn-edit btn-success" >Editar</button>
        </div>  
    </div>

    
    )
}
    export default BookCard;
