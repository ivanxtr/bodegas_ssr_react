import React from 'react'

const Header = () => {
  return (
    <>
    <div className="pos-f-t">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <div className="f-lato-italic f-16 text-pink-2 pr-4 text-center hover">Registrarse</div>
        <div className="f-lato-italic f-16 text-pink-2 pr-4 hover">Iniciar Sesion</div>
      </div>
    </div>
    <div className="col-12 p-2 d-flex d-flex justify-content-between align-content-center box-shadow-gray">
      <div className="f-lato-italic f-26 hover ml-94">
        <a className="navbar-brand d-flex justify-content-center align-items-center" href="/">
            <p className="text-pink-2 mt-2 mb-0 ml-2">Solobodegas.mx</p> 
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center">
      </div>
      <nav className="navbar navbar-light mr-94">
        {
          /*
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          */
        }
      </nav>
    </div>
    </div>
    </>
  )
}

export default Header