import React from 'react'
import './book.css';
import UseGlobalStore from '../../store/store';
import { FaRegHeart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Modal from './assets/Modal';

export default function Book() {

    const variables = UseGlobalStore((state) => state.variables)

    /* const singleBook = variables.singleBookItem; */

  return (

    <div className="container-book row">
            <div className="book" > 
            <div className="container-book my-5">
      <div className="row justify-content-center">
        <div className="d-flex-book justify-content-between">
        
                <p className="text-dark" style={{ paddingTop: "10px" }}>
                  
                   Jesus Gimenez
                  
                </p>
                <p className="text-dark" style={{ paddingTop: "10px" }}><FaRegHeart /></p>
              </div>
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div style={{ borderRadius: "15px" }}>
          <img
                        src="https://cdn.wallapop.com/images/10420/gj/ou/__/c10420p1000530357/i4861653056.jpg"
                        className="book-img-top"
                        style={{ width: '20rem' }}
                        alt="..."
                    
                    />
            <div className="pb-0">
              <div className="justify-content-between">
                <div>
                  <p className="right">
                    Harry Potter y el prisionero de Azkaban
                  </p>
                  <p className="small text-muted right">Estado: muy bueno</p>
                  <p className="small text-muted right">Edición de bolsillo</p>
                  <p className="small text-muted right">850 páginas</p>
                
                  <div className="d-inline-flex right">
                  <p className="text-location">
                  
                  <MdLocationOn />
                  
                  </p>
                  <p className="text-location">Valencia</p>
                  </div>
                  <hr className="my-0" />
                  <p className="item-body">
                    Libro de harry potter en muy buenas condiciones, edición especial coleccionista y bla bla bla bla
                  </p>
                  <hr className="my-0" />
                  
                </div>
                <div >
                <button className="btn btn-primary">Intercambiar</button>
                <Modal />
                <p><br/><br/></p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
                </div>
          
        
            </div>
  )
   
}

/// USUARIO PRUEBA API

/* {
  "name": "Test",
  "email": "testingmelody@test.com",
  "password": "1234",
  "city": "Valencia",
  "phoneNumber": "0000",
  "_id": "66210fe5b11a848e5598c433",
  "__v": 0

  id de libro: 6621116eb11a848e5598c437

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2MjEwZmU1YjExYTg0OGU1NTk4YzQzMyIsIm5hbWUiOiJUZXN0IiwiZW1haWwiOiJ0ZXN0aW5nbWVsb2R5QHRlc3QuY29tIiwicGFzc3dvcmQiOiIxMjM0IiwiY2l0eSI6IlZhbGVuY2lhIiwicGhvbmVOdW1iZXIiOiIwMDAwIiwiX192IjowfSwiaWF0IjoxNzEzNDQyOTE3LCJleHAiOjE3MTM1MjkzMTd9.W-en1NlYx8Zkn93iO5frWDXixzPrYFgCjsG92tMdwBc"
} */