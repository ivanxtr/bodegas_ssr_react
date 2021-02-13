import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faAppStore, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faMapMarkedAlt, faMap } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return(
    <>
    <div className="site-footer">
        <div className="inner first">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="widget">
                            <h3 className="heading">Acerca Solobodegas.mx</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className="widget">
                        <ul className="list-unstyled social">
                            <li>
                                <a className="d-flex justify-content-center align-items-center" href="/"><FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a className="d-flex justify-content-center align-items-center" href="/"><FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a className="d-flex justify-content-center align-items-center" href="/"><FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a className="d-flex justify-content-center align-items-center" href="/"><FontAwesomeIcon icon={faAppStore} />
                                </a>
                            </li>
                            <li>
                                <a className="d-flex justify-content-center align-items-center" href="/"><FontAwesomeIcon icon={faAndroid} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 pl-lg-5">
                    <div className="widget">
                        <h3 className="heading">Paginas</h3>
                        <ul className="links list-unstyled">
                            <li><a href="/">Compra</a></li>
                            <li><a href="/">Renta</a></li>
                            <li><a href="/">Locales Comerciales</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-2">
                    <div className="widget">
                        <h3 className="heading">Recursos</h3>
                            <ul className="links list-unstyled">
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contacto</a></li>
                            </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="widget">
                        <h3 className="heading">Contacto</h3>
                        <ul className="list-unstyled links">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a className="pl-3" href="/">solobodegasenrenta.com@hotmail.com</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                <a className="pl-3" href="/"> 331 561 1604</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                <a className="pl-3" href="/">Circuito Chimbote 268, Tlajomulco 45525</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="inner dark">
        <div className="container">
            <div className="row text-center text-md-left">
                <div className="col-md-6 mb-3 mb-md-0">
                    <p>Copyright ©
                        2021 All rights reserved solobodegas.mx
                    </p>
                </div>
                <div className="col-md-6 text-md-right">
                    <a href="/" className="mx-2">Terms</a>
                    <a href="/" className="mx-2">Privacy</a>
                </div>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
