function Footer() {
    return(
        <footer>
  <div className="center">
    <div className="text1">
      <div className="subtext">
        únete a Steam y descubre miles de titulos para jugar.
      </div>
          <div className="info">
            <a href="">Más información</a>
          </div>
    </div>
    <div className="pc"><img src="public/entra compu.png" alt="" /></div>
    <div className="text2"><a href=""><span>Únete a Steam</span></a>
      <div className="subtext">
        Es gratis y fácil de usar.
      </div>
    </div>
  </div>

  <div className="centerResponsive">
    <div className="text1R">
      <div className="subtextR">
        únete a Steam y descubre miles de titulos para jugar.
      </div>
          <div className="infoR">
            <a href="">Más información</a>
          </div>
    </div>
    <div className="pc"><img src="public/entra compu.png" alt="" /></div>
    <div className="text2"><a href=""><span>Únete a Steam</span></a>
      <div className="subtext">
        Es gratis y fácil de usar.
      </div>
    </div>
  </div>

  <div className="footer">
    <div className="footer_content">
      <span className="footerLogo"><img src="public/veilvi.png" alt="" /></span>
      <span className="footerText">
        © Valve Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países. Algunos datos geoespaciales de este sitio web se obtienen de  
      <a className="geoname" href="">geonames.org</a>.
      <br/>
      </span>
      <span className="valve_links">
        <a href="http://store.steampowered.com/privacy_agreement/" target="_blank">Política de Privacidad</a>
        &nbsp; | &nbsp;<a href="https://store.steampowered.com/legal/" target="_blank">Información legal</a>
        &nbsp;| &nbsp;<a href="http://store.steampowered.com/subscriber_agreement/" target="_blank">Acuerdo de Suscriptor a Steam</a>
                      &nbsp;| &nbsp;<a href="http://store.steampowered.com/account/cookiepreferences/" target="_blank">Cookies</a>
      </span>
    </div>
  </div>
</footer>
    )
}

export default Footer