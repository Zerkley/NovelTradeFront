import React, { useEffect, useState } from 'react'
import './catalog.css';
import useGlobalStore from '../../store/store';
import { Link } from "react-router-dom";

export default function Catalog() {

    const variables = useGlobalStore((state) => state.variables);
    const allBooks = variables.allNonBooks;
    useEffect( () => {
        const libros =  variables.getBooks()
       /*  console.log(libros) */
    }, []) 


    //pruebas de filtro

    const [search, setSearch] = useState ("")

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    let results = []
        if (!search)
        {
            results = allBooks
        } else {

            results = allBooks.filter((item) => 
            item.title.toLowerCase().includes(search.toLocaleLowerCase()) || item.author.toLowerCase().includes(search.toLocaleLowerCase())
            )}

  return (

    <div className="container row">
         <h1 className="text-danger my-title">Libros disponibles</h1>

            <input value={search} onChange={searcher} type="text" placeholder='Busca tu libro o autor favorito' className="form-control"></input>
            <div className="d-flex"> 
            {results?.map((item, index) => {
                return (
                    <Link to="/book">
                    <div
                    className="card"
                    /* style={{ minWidth: "225px", flex: "0 0 auto" }} */
                    key={index}
                >
                    <img
                        src="https://iili.io/JUawpft.md.jpg?pictureSize=W640"
                        className="card-img-top"
                        style={{ width: '16rem' }}
                        alt="..."
                    
                    />
                    <div className="card-body">
                        <h5 className="mb-2 text-lg font-bold">{item.title}</h5>
                        <h6 className="mb-2 text-lg font-bold">{item.author}</h6>
                        <h6 className="mb-2 text-lg font-bold">{item.state}</h6>
            
                    </div>
                </div></Link>
            )})}
            {/* <button onClick={() => console.log(allBooks)}>Botón</button> */}
            </div>

    </div>
  )
   
}