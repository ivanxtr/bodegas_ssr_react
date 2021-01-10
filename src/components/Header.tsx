import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <>
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
      <span className="icofont-close js-menu-toggle active"></span>
      </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0"></span>
          </li>
        </ul>
      </div>
    </div>
    <nav className="site-nav">
      <div className="container">
        <div className="site-navigation">
          <a href="/" className="logo m-0">SoloBodegas.mx<span className="text-primary">.</span></a>
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu">
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faHome} />
                </a>
              </li>
              <li><a href="buy.html">Compra</a></li>
              <li className="active"><a href="rent.html">Renta</a></li>
              <li><a href="about.html">Locales Comerciales</a></li>
              <li><a href="contact.html">Contacto</a></li>
            </ul>
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li><a href="/">Registrate</a></li>
              <li className="cta-button active"><a href="/">Login</a></li>
            </ul>
            <a href="/" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="/main-navbar">
              <span></span>
            </a>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Header
