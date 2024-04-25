import React, { useState } from 'react';
import './editUser.css';
import { RiCloseLine } from "react-icons/ri";
import Modal from 'react-modal';
import UseGlobalStore from '../../store/store';
/* import Toast from '../../pages/book/assets/Toast'; */


    const EditUser = ({ isOpen, onRequestClose }) => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          city: '',
          phoneNumber: '',
        });


        const variables = UseGlobalStore((state) => state.variables);
        const editUser = variables.editUser;
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              await editUser(
                formData.name,
                formData.email,
                formData.city,
                formData.phoneNumber
              );
              onRequestClose(); // Cierra el modal después de enviar los datos
             /*  handleToast(); // Ejecuta handleToast si se ha enviado correctamente */
            } catch (error) {
              console.error('Error al crear el libro:', error);
            }
          };


          // prueba para ver si funciona el toast

        /* const handleToast = () => {
            return (
                <Toast message="Libro añadido correctamente 😃" autoClose={5000} />
            )
            }; */
        
           

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal" overlayClassName="Overlay">
        <div className="ModalContent">
                <button className="ModalCloseButton" onClick={onRequestClose}>
                  <RiCloseLine />
                </button>
        <h2>Editar información personal</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre y apellidos:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Teléfono:
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>
      <label>
        Dirección:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
        
          <div>
            <button className="btn btn-primary" /* onClick={handleToast} */ type="submit">Confirmar</button>
          </div>
      
    </form>
    </div>
  </Modal>
  )
}

export default EditUser;
