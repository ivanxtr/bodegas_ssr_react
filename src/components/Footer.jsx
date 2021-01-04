import React from 'react'
const Footer = () => {
  return(
    <>
    <footer className="text-muted footer pt-5">
      <div className="container">
        <div className="f-lato-italic d-flex flex-wrap justify-content-between">
          <a href="/listings">Propiedades Industriales</a>
          <a href="/houses">Propiedades Habitacionales</a>
          <a href="/locales">Locales Comerciales</a>
          <a href="/news">Noticias del Sector Inmobiliario</a>
        </div>
        <hr/>
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="col-10 f-lato-italic f-16 d-flex justify-content-around align-items-center">
            <p>© 2020 BestTrade,Inc All rights reserved</p>
            <p>(33) 1561 1604 - (33) 13491467 - contacto@best-trade.com.mx</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer