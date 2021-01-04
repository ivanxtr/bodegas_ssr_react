import React from 'react'

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
          <a href="index.html" className="logo m-0">SoloBodegas.mx<span className="text-primary">.</span></a>
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu">
              <li><a href="index.html">Home</a></li>
              <li className="has-children">
                <a href="/">Dropdown</a>
                  <ul className="dropdown">
                    <li><a href="elements.html">Elements</a></li>
                    <li className="has-children">
                      <a href="/">Menu Two</a>
                        <ul className="dropdown">
                          <li><a href="/">Sub Menu One</a></li>
                          <li><a href="/">Sub Menu Two</a></li>
                          <li><a href="/">Sub Menu Three</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Menu Three</a></li>
                  </ul>
              </li>
              <li><a href="buy.html">Buy</a></li>
              <li className="active"><a href="rent.html">Rent</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li><a href="/">Sign up</a></li>
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
