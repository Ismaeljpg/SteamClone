import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const HandleClick = (e) => {
    e.preventDefault();
    if (username === "usuario@example.com" && contraseña === "contraseña") {
      // Inicio de sesión exitoso
      setErrorMessage("");
    } else {
      // Error al iniciar sesión
      setErrorMessage(
        "Comprueba tu contraseña y nombre de cuenta e inténtalo de nuevo."
      );
    }
  };

  return (
    <>
      <div className="centro">
        <div className="centro2">
          <div className="centro3">
            <div className="inicio-sesion">
              <p>INICIAR SESIÓN</p>
            </div>
            <div className="formulario">
              <div>
                <form className="content" action="">
                  <div className="data">
                    <b className="iniciar">
                      inicia sesión con tu nombre de la cuenta
                    </b>
                    <b className="iniciar2">
                      inicia sesión con tu nombre de cuenta
                    </b>
                    <div className="data">
                      <input
                        id="email"
                        className="form"
                        type="email"
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>
                    <b className="password">contraseña</b>
                    <div>
                      <input
                        className="form"
                        type="password"
                        value={contraseña}
                        onChange={(event) => {
                          setContraseña(event.target.value);
                        }}
                      />
                    </div>
                    <div className="Recordarme">
                      <div id="Recordarme"></div>
                      <p>Recordarme</p>
                    </div>
                    <div className="button">
                      <button className="Inicio" onClick={HandleClick}>
                        iniciar sesion
                      </button>
                      <div className="contentError">
                        {errorMessage && (
                          <p className="error">{errorMessage}</p>
                        )}
                      </div>

                      <div className="ayuda">
                        <a href="">Ayuda, no puedo iniciar sesion</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="QR">
                <div>
                  <b>o bien con un codigo qr</b>
                </div>
                <div className="imgqr">
                  <img src="public/qr.png" alt="" />
                </div>
                <div>
                  <p>
                    Usa la <a href="">aplicación Steam Mobile</a> para iniciar
                    sesión con un codigo QR
                  </p>
                </div>
              </div>
              <div className="QRresponsive">
                    <div className="nuevo">
                      <p>¡NUEVO!</p>
                    </div>
                    <div className="Mobile">
                      <p>
                        Los usuarios de la aplicacion Steam Mobile pueden iniciar sesión escaneando un codigo QR
                      </p>
                    </div>
                    <div className="btn-n">
                      Ver codigo QR
                    </div>
                    <a href="">Más información</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
