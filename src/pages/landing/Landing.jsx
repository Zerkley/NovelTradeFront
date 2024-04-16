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
                    <h2>Título 1</h2>
                    <i className="fas fa-star"></i>
                    <p>Texto breve para la primera columna.</p>
                </div>
                <div className="column">
                    <h2>Título 2</h2>
                    <i className="fas fa-heart"></i>
                    <p>Texto breve para la segunda columna.</p>
                </div>
                <div className="column">
                    <h2>Título 3</h2>
                    <i className="fas fa-check"></i>
                    <p>Texto breve para la tercera columna.</p>
                </div>
                </div>
          </div>
        </div>
      

    );
  }
  
  export default Landing;
  