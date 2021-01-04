import React from 'react'
const Footer = () => {
  return(
    <>
    <div className="site-footer">
                <div className="inner first">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="widget">
                                    <h3 className="heading">About Colorlib</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="widget">
                                <ul className="list-unstyled social">
                                    <li><a href="/"><span className="icon-dribbble"></span></a></li>
                                    <li><a href="/"><span className="icon-linkedin"></span></a></li>
                                    <li><a href="/"><span className="icon-twitter"></span></a></li>
                                    <li><a href="/"><span className="icon-instagram"></span></a></li>
                                    <li><a href="/"><span className="icon-facebook"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 pl-lg-5">
                            <div className="widget">
                                <h3 className="heading">Pages</h3>
                                <ul className="links list-unstyled">
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Terms</a></li>
                                    <li><a href="/">Privacy</a></li>
                                    <li><a href="/">Buy</a></li>
                                    <li><a href="/">Sell</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="widget">
                                <h3 className="heading">Resources</h3>
                                    <ul className="links list-unstyled">
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="widget">
                                <h3 className="heading">Contact</h3>
                                <ul className="list-unstyled quick-info links">
                                    <li className="email"><a href="/">info@Colorlib</a></li>
                                    <li className="phone"><a href="/">+1 222 212 3819</a></li>
                                    <li className="address"><a href="/">43 Raymouth Rd. Baltemoer, London 3910</a></li>
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
                              <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
                              <script>document.write(new Date().getFullYear());</script>
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
