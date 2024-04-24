import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css';


function Landing() {
    return (

        
        <div className="HeroSection light hero">
        <img src="https://img.freepik.com/premium-vector/book-exchange-landing-page-template-bookcrossing-vector-illustration-banner-education-knowledge-concept-diverse-hands-holding-books-swap-literature-event-library-day-culture-festival_534430-1064.jpg" />
          <div className="heroInner">
            <span>
              <h1>Bienvenidos a NovelTrade</h1>
              <Link to="/Catalog">
                                            <button className="btn btn-light">
                                                Ver catálogo
                                            </button>
                                        </Link>
            </span>
            <div className="column-container">
                <div className="column">
                    <h2>Intercambia libros, intercambia ideas</h2>
                    <i className="fas fa-star"></i>
                    <p>La mejor manera de descubrir nuevos libros y compartir tus favoritos.</p>
                </div>
                <div className="column">
                    <h2>Únete a la comunidad de amantes de los libros</h2>
                    <i className="fas fa-heart"></i>
                    <p>Conecta con otros lectores y amplía tu biblioteca sin gastar dinero</p>
                </div>
                <div className="column">
                    <h2>Lee más, gasta menos</h2>
                    <i className="fas fa-check"></i>
                    <p>Una alternativa ecológica y sostenible para disfrutar de la lectura</p>
                </div>
                </div>
          </div>
        </div>
      

    );
  }
  
  export default Landing;
  