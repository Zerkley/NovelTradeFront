import React, { useState } from "react";
import UseGlobalStore from "../../store/store";
import "animate.css";

import "./login.css";

const Login = () => {
  const crearUsuario = UseGlobalStore(
    (state) => state.functions.getCrearUsuario
  );

  const login = UseGlobalStore((state) => state.functions.getLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = () => {
    login(loginEmail, loginPassword);
  };

  const [usuarioCreado, setUsuarioCreado] = useState("");
  const [estilosMensaje, setEstilosMensaje] = useState("");

  const handleCrearUsuario = () => {
    crearUsuario(email, password);

    setUsuarioCreado("¡Usuario creado! ¡Hora de iniciar sesión y descubrir!");
    setEstilosMensaje("animate__animated animate__fadeOut");
    setTimeout(() => {
      setUsuarioCreado("");
      setEstilosMensaje("");
      cambiar_login();
    }, 3000);
  };

  const cambiar_login = () => {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_login";
    document.querySelector(".cont_form_login").style.display = "block";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.opacity = "1";
    }, 400);

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
    }, 200);
  };

  const cambiar_sign_up = () => {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_sign_up";
    document.querySelector(".cont_form_sign_up").style.display = "block";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.opacity = "1";
    }, 100);

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.display = "none";
    }, 400);
  };

  const ocultar_login_sign_up = () => {
    document.querySelector(".cont_forms").className = "cont_forms";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
      document.querySelector(".cont_form_login").style.display = "none";
    }, 500);
  };

  return (
    <div className="loginPage">
      <div className="cotn_principal">
        <div className="cont_centrar">
          <div className="cont_login">
            <div className="cont_info_log_sign_up">
              <div className="col_md_login">
                <div className="cont_ba_opcitiy">
                  <h2>INICIAR SESION</h2>
                  <p>
                    Utiliza tu usuario y contraseña para acceder a tu cuenta
                  </p>

                  <button className="btn_login" onClick={cambiar_login}>
                    Iniciar sesion
                  </button>
                </div>
              </div>
              <div className="col_md_sign_up">
                <div className="cont_ba_opcitiy">
                  <h2>REGISTRARSE</h2>
                  <p>¿Eres nuevo? Crea una cuenta para comenzar.</p>
                  <button className="btn_sign_up" onClick={cambiar_sign_up}>
                    Registrarse
                  </button>
                </div>
              </div>
            </div>
            <div className="cont_back_info">
              <div className="cont_img_back_grey">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="cont_forms">
              <div className="cont_img_back_">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="cont_form_login">
                <a href="#" onClick={ocultar_login_sign_up}>
                  <i className="material-icons">&#xE5C4;</i>
                </a>
                <h2>INICIAR SESION</h2>
                <input
                  type="text"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                {/*  <Link to="/catalog"> */}
                <button
                  className="btn_login"
                  onClick={() => {
                    handleLogin();
                    cambiar_login();
                  }}
                >
                  Iniciar sesion
                </button>
                {/*  </Link> */}
              </div>
              <div className="cont_form_sign_up">
                <a href="#" onClick={ocultar_login_sign_up}>
                  <i className="material-icons">&#xE5C4;</i>
                </a>
                <h2>REGISTRARSE</h2>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="btn_sign_up"
                  onClick={() => {
                    handleCrearUsuario();
                    cambiar_sign_up();
                  }}
                >
                  Registrarse
                </button>
                <p className={estilosMensaje}>{usuarioCreado}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
