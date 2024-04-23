import React, { useState } from 'react';
import './addBook.css';
import { RiCloseLine } from "react-icons/ri";
import Modal from 'react-modal';
import UseGlobalStore from '../../store/store';

    const AddBook = ({ isOpen, onRequestClose }) => {
        const [formData, setFormData] = useState({
          title: '',
          type: '',
          state: '',
          publishedYear: '',
          genre: '',
          author: '',
          size: '',
        });

        const years = [];
         for (let year = 1900; year <= 2024; year++) {
         years.push(year);
        }

        const variables = UseGlobalStore((state) => state.variables);
        const createUserBook = variables.createUserBook;
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              await createUserBook(
                formData.title,
                formData.type,
                formData.state,
                formData.publishedYear,
                formData.genre,
                formData.author,
                formData.size
              );
              onRequestClose(); // Cierra el modal después de enviar los datos
            } catch (error) {
              console.error('Error al crear el libro:', error);
            }
          };
           

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal" overlayClassName="Overlay">
        <div className="ModalContent">
                <button className="ModalCloseButton" onClick={onRequestClose}>
                  <RiCloseLine />
                </button>
        <h2>Añadir nuevo libro</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Autor:
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </label>
      <div className="groupInput">
      <label>
            Género: 
            <select name="genre" value={formData.genre} onChange={handleChange}>
              <option value="">Selecciona un género</option>
              <option value="Ficción">Ficción</option>
              <option value="No ficción">No ficción</option>
              <option value="Infantil">Infantil</option>
              <option value="Juvenil">Juvenil</option>
              <option value="Manga">Manga y Cómics</option>
              
            </select>
          </label>
          <label>
            Tipo: 
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Selecciona un tipo</option>
              <option value="Bolsillo">De Bolsillo</option>
              <option value="Tapa Dura">Tapa Dura</option>
              <option value="Tapa Blanda">Tapa Blanda</option>
            
              
            </select>
          </label>
      </div>
      <div className="groupInput">
          <label>
            Estado: 
            <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Selecciona un estado</option>
              <option value="Como nuevo">Como nuevo</option>
              <option value="Buen Estado">En buen estado</option>
              <option value="En condiciones aceptables">En condiciones aceptables</option>
              <option value="Desgastado">Desgastado</option>
              
            </select>
          </label>
          <label>
            Tamaño: 
            <select name="size" value={formData.size} onChange={handleChange}>
              <option value="">Selecciona un tamaño</option>
              <option value="S">S - Menos de 200 páginas</option>
              <option value="M">M - Entre 200 y 500 páginas</option>
              <option value="L">L - Más de 500 páginas</option>
              
            </select>
          </label>
          </div>
          <label>
            Año de Publicación:
            <input type="number" name="publishedYear" value={formData.publishedYear} onChange={handleChange} maxLength={4} />
        
          </label>
      <button className="btn btn-primary" type="submit">Crear Libro</button>
    </form>
    </div>
  </Modal>
  )
}

export default AddBook;

