import React, { useState } from "react";
import "./faq.css";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question:
        "¿Cómo puedo registrarme en la aplicación para intercambiar libros en Noveltrade?",
      answer: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "¿Cómo puedo publicar un libro en Noveltrade?",
      answer: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question:
        "¿Cuál es el proceso para proponer un intercambio de libros con otro usuario?",
      answer: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question:
        "¿Cómo puedo contactar con un usuario para proponer un intercambio de libros?",
      answer: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "¿Cómo puedo aceptar una propuesta de intercambio de libros?",
      answer: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "¿Cómo puedo rechazar una propuesta de intercambio de libros?",
      answer: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="faqPage">
      <div className="contenedorFaq">
        <main className="card">
          <div className="hero"></div>

          <h2 className="title">FAQ</h2>

          <div className="acc-container">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  style={{ fontSize: "15px" }}
                  className={`acc-btn ${openIndex === index ? "is-open" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </button>
                <div
                  className="acc-content"
                  style={{ maxHeight: openIndex === index ? "1000px" : "0" }}
                >
                  <p style={{ fontSize: "15px" }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQAccordion;
