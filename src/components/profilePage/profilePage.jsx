import React from "react"
import useGlobalStore from "../../store/store";
import './profilePage.css';


const ProfilePage = () => {
   


  
    return (
    <div className="card m-3">
        <div className="row p-3">
            <div className="col-4">
                <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="img-fluid" alt="..."/>
            </div>
            <div className="col-6">  
                <div className="card-body">
                    <h5 className="card-title">Nombre y Apellidos</h5>
                    <p className="card-text">✉ email@gmail.com</p>
                    <p className="card-text">✆ 666-666-666</p>
                    <p className="card-text">📫 Dirección</p>
                </div>
            </div>  
            <div className="col-2">
               
                    <button className="btn btn-success" >Editar</button>
               
            </div>
        </div>
    </div>
    )
}
    export default ProfilePage;
