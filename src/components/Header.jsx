function Header() {



  return (
    <header>
      <div className="instalar">
        <a href="" className="boton green">
          <img src="public/install.png" alt="" />
          <p>Instalar Steam</p>
        </a>
        <a href="" className="cuenta">
          iniciar sesión
        </a>
        |<span className="lenguaje">idioma</span>
      </div>
      <div className="logo2">
          <img src="public/steemlogo.png" alt="" />
      </div>
      <nav className="content-nav">
        <div className="logo">
          <img src="public/steemlogo.png" alt="" />
        </div>
        <div className="nav">
          <a className="links tienda" href="">
            TIENDA
            <div className="Subcontent">
              <div className="TIENDA">
                <p href="" className="Submenu">Inicio</p>
                <p href="" className="Submenu">Lista de descubrimientos</p>
                <p href="" className="Submenu">Lista de deseados</p>
                <p href="" className="Submenu">Tienda de puntos</p>
                <p href="" className="Submenu">Noticias</p>
                <p href="" className="Submenu">Estadísticas</p>
              </div>
            </div>
          </a>
          <a className="links comunidad" href="">
            COMUNIDAD
            <div className="Subcontent">
              <div className="COMUNIDAD">
                <p href="" className="Submenu">Inicio</p>
                <p href="" className="Submenu">Discusiones</p>
                <p href="" className="Submenu">Workshop</p>
                <p href="" className="Submenu">Mercado</p>
                <p href="" className="Submenu">Retransmisiones</p>
              </div>
            </div>
          </a>
          <a className="links" href="">
            ACERCA DE
          </a>
          <a className="links" href="">
            SOPORTE
          </a>
        </div>
      </nav>
    </header>

  );
}

export default Header;
