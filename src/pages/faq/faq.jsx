import React, { useState } from "react";
import "./faq.css";

function Faq() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleToggleAnswer = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="contenedorFaq">
      <div style={{ marginTop: "90px" }} className="faq">
        <input id="faq-a" type="checkbox" />
        <label htmlFor="faq-a" onClick={() => handleToggleAnswer("faq-a")}>
          <p className="faq-heading">
            ¿Cómo puedo registrarme en la aplicación para intercambiar libros en
            Noveltrade?
          </p>
          <div className="faq-arrow"></div>
        </label>
        {activeDropdown === "faq-a" && (
          <p className="faq-text">
            Busca la opción "Registrarse" o "Crear cuenta" y selecciónala.
            Completa el formulario de registro proporcionando la información
            requerida, como tu nombre completo, dirección de correo electrónico
            y una contraseña segura. Confirma tu dirección de correo electrónico
            siguiendo las instrucciones enviadas a tu bandeja de entrada. Una
            vez confirmado, inicia sesión en tu cuenta utilizando la dirección
            de correo electrónico y la contraseña que proporcionaste durante el
            registro. ¡Listo! Ahora estás registrado en Noveltrade y puedes
            comenzar a explorar libros para intercambiar con otros usuarios.
          </p>
        )}

        <input id="faq-b" type="checkbox" />
        <label htmlFor="faq-b" onClick={() => handleToggleAnswer("faq-b")}>
          <p className="faq-heading">
            ¿Cómo puedo publicar un artículo en Noveltrade?
          </p>
          <div className="faq-arrow"></div>
        </label>
        {activeDropdown === "faq-b" && (
          <p className="faq-text">
            Inicia sesión en tu cuenta de Noveltrade o regístrate si es tu
            primera vez en la plataforma. Dirígete a la sección de "Publicar" o
            "Crear nuevo anuncio". Completa los detalles del libro que deseas
            intercambiar, incluyendo título, autor, género, estado del libro
            (nuevo, usado, etc.) Adjunta una foto del libro si es posible. Establece tus
            preferencias de intercambio, como el tipo de libro que estás
            buscando a cambio (género, autor, etc.). Revisa y confirma la
            información proporcionada antes de publicar tu anuncio. Una vez
            publicado, tu artículo estará disponible para que otros usuarios de
            Noveltrade lo vean y te contacten para proponer intercambios.
          </p>
        )}

        <input id="faq-c" type="checkbox" />
        <label htmlFor="faq-c" onClick={() => handleToggleAnswer("faq-c")}>
          <p className="faq-heading">
            ¿Cuál es el proceso para proponer un intercambio de libros con otro
            usuario?
          </p>
          <div className="faq-arrow"></div>
        </label>
        {activeDropdown === "faq-c" && (
          <p className="faq-text">
            Utiliza la función de búsqueda en la plataforma para encontrar el
            libro que deseas intercambiar. Puedes filtrar los resultados por
            título, autor, género, etc. Examina los anuncios de otros usuarios que ofrecen el libro que estás buscando.
            Lee la descripción del libro y asegúrate de que se ajuste a tus
            necesidades e intereses. Si estás interesado en un anuncio y tienes un libro para ofrecer a cambio,
            puedes enviar una propuesta de intercambio al usuario. Algunas
            plataformas te permiten enviar un mensaje al usuario para negociar
            los detalles del intercambio. Una vez que hayas enviado tu propuesta de intercambio, espera a que el otro usuario
            responda. Pueden aceptar tu oferta, rechazarla o sugerir
            modificaciones a los términos del intercambio. Si ambas partes están de acuerdo con los términos del
            intercambio, procede a finalizar la transacción. Esto puede implicar
            coordinar la entrega de los libros, ya sea en persona o a través del
            correo, según lo acordado entre los usuarios. Después de completar el intercambio,
            recuerda actualizar el estado del mismo en la plataforma. Esto
            informará a otros usuarios que el libro ya no está disponible para
            intercambio.
          </p>
        )}

        <input id="faq-d" type="checkbox" />
        <label htmlFor="faq-d" onClick={() => handleToggleAnswer("faq-d")}>
          <p className="faq-heading">
            ¿Qué debo hacer si no estoy satisfecho con el libro que recibí en el
            intercambio?
          </p>
          <div className="faq-arrow"></div>
        </label>
        {activeDropdown === "faq-d" && (
          <p className="faq-text">
            Comunica tus preocupaciones: Ponte en contacto con el usuario con el
            que hiciste el intercambio y explícale tu situación de manera clara
            y respetuosa. Negocia una solución: Trata de llegar a un acuerdo
            mutuamente satisfactorio, que podría incluir un nuevo intercambio o
            la devolución del libro. Recuerda los términos del intercambio:
            Siempre trata de resolver el problema dentro de los términos
            acordados inicialmente en el intercambio. Si el problema persiste,
            Noveltrade puede ofrecer recursos adicionales para resolver
            disputas.
          </p>
        )}

        <input id="faq-e" type="checkbox" />
        <label htmlFor="faq-e" onClick={() => handleToggleAnswer("faq-e")}>
          <p className="faq-heading">
            ¿Cómo puedo comunicarme con otros usuarios?
          </p>
          <div className="faq-arrow"></div>
        </label>
        {activeDropdown === "faq-e" && (
          <p className="faq-text">
            Inicio de sesión: Inicia sesión en tu cuenta de Noveltrade
            utilizando tus credenciales. Selecciona el usuario: Navega por la
            plataforma y encuentra el perfil del usuario con el que deseas
            comunicarte. Puedes buscar usuarios específicos utilizando la
            función de búsqueda si conoces su nombre de usuario. Envía un
            mensaje: Una vez en el perfil del usuario, busca la opción de enviar
            un mensaje o iniciar una conversación. Haz clic en ella para abrir
            un nuevo mensaje. Escribe tu mensaje: Escribe tu mensaje, incluyendo
            cualquier pregunta o consulta que tengas para el usuario. Asegúrate
            de ser claro y respetuoso en tu comunicación. Envía el mensaje:
            Después de redactar tu mensaje, envíalo al usuario haciendo clic en
            el botón de enviar. Espera la respuesta: Una vez enviado, espera a
            que el usuario responda a tu mensaje. Pueden responder directamente
            a tu mensaje o iniciar una nueva conversación contigo.
          </p>
        )}

        <input id="faq-f" type="checkbox" />
        <label htmlFor="faq-f" onClick={() => handleToggleAnswer("faq-f")}>
          <p className="faq-heading">
            ¿Qué medidas de seguridad ofrece Noveltrade para proteger a los
            usuarios?
          </p>
          <div className="faq-arrow"></div>
        </label>
        {activeDropdown === "faq-f" && (
          <p className="faq-text">
            Verificación de identidad: Noveltrade puede requerir que los
            usuarios verifiquen su identidad mediante métodos como la
            confirmación del correo electrónico o la verificación del número de
            teléfono. Sistema de valoración: La plataforma puede contar con un
            sistema de valoración donde los usuarios pueden calificar y dejar
            comentarios sobre sus experiencias de intercambio. Esto ayuda a
            fomentar la confianza entre los usuarios y a identificar a aquellos
            que mantienen un buen historial de intercambios. Mensajería segura:
            Noveltrade puede proporcionar un sistema de mensajería interna que
            protege la privacidad de los usuarios y facilita la comunicación
            durante el proceso de intercambio. Políticas de seguridad: La
            plataforma puede establecer políticas claras relacionadas con la
            seguridad de las transacciones, como la prohibición de compartir
            información personal o la intervención en caso de disputas entre
            usuarios. Soporte al cliente: Noveltrade puede ofrecer un equipo de
            soporte dedicado para ayudar a los usuarios en caso de problemas o
            preguntas relacionadas con la seguridad de la plataforma.
          </p>
        )}
      </div>
    </div>
  );
}

export default Faq;
