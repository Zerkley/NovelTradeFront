import React from 'react'
import { useState, useEffect } from "react";
import './modal.css';

export default function Modal() {

    const [advice, setAdvice] = useState("");

  useEffect(() => {
    let r_text = new Array();
    r_text[0] = 'Intercambiar libros ayuda a promover la diversidad literaria, y te permite explorar géneros y autores que todavía no has descubierto.';
    r_text[1] = 'El intercambio de libros además de ayudar al medio ambiente, ¡también lo hace con tu bolsillo! Puedes ahorrar hasta un 50% en comparación con la compra de libros nuevos.';
    r_text[2] = 'El intercambio de libros promueve la reutilización y ayuda a reducir el desperdicio. Cada año se desechan millones de toneladas de libros, ¡imagina cuántas podríamos con intercambios!';
    r_text[3] = '¡Compartir libros es multiplicar conocimiento! El intercambio de libros fomenta la circulación de ideas, ampliando el acceso a nuevas ideas y pensamientos.';

    var i = Math.floor(r_text.length * Math.random());
    setAdvice(r_text[i])
  },[])

  return (
    <div className="modal-container">
        <div className="modal-carousel">
            <p style={{ fontFamily: "georgia" }}>
           {advice}
            </p>
          
        </div>
    </div>
  )
}
