import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Header />
      <div className="f-40 d-none d-sm-flex justify-content-center align-items-center text-center py-2">
        <span className="col-12 col-lg-10 col-xl-6 f-lato-italic">Encuentra Bienes Raices,Noticias del Sector Inmobiliario y mas.</span>
      </div>
      <div className="col-12 pt-5 d-flex justify-content-between p-0 flex-wrap">
        <div className="col-6 d-flex justify-content-center align-items-center p-0 flex-wrap">
          <img className="w-100" alt="house" src={'/assets/images/house.jpg'}/>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column p-0 flex-wrap">
          <div className="col-xl-3 f-lato-italic f-26 text-center d-flex align-items-center">Propiedades en Venta</div>
          <a href="/shop">
            <button type="button" className="btn btn-lg f-lato-italic text-pink bg-white button-size border-pink">
              Venta
            </button>
          </a>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-between p-0">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column p-0">
          <div className="col-xl-4 f-lato-italic f-26 text-center d-flex align-items-center m-h-100">
            Propiedades en Renta
          </div>
          <a href="/rent">
            <button type="button" className="btn btn-lg bg-pink f-lato-italic text-white button-size">
             Renta
            </button>
          </a>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center p-0">
          <img className="w-100" alt="house" src={'/assets/images/warehouse.jpg'}/>
        </div>
      </div>
      <div className="col-12 pt-5 d-flex justify-content-between pt-0 pb-5">
        <div className="col-6 d-flex justify-content-center align-items-center p-0">
          <img className="w-1-2" alt="house" src={'/assets/images/shop.jpg'}/>
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center flex-column p-0">
          <div className="col-xl-4 f-lato-italic f-26 text-center d-flex align-items-center">Locales Comerciales</div>
          <a href="/locales">
            <button type="button" className="btn btn-lg f-lato-italic text-pink bg-white button-size border-pink">Consultar</button>
          </a>
        </div>
      </div>
      {/* <div className="col-12 d-flex justify-content-between py-5">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column p-0">
          <div className="col-xl-4 f-lato-italic f-26 text-center d-flex align-items-center m-h-100">
            Noticias del Sector Inmobiliario
          </div>
          <a href="/news">
            <button type="button" className="btn btn-lg bg-pink f-lato-italic text-white button-size">
              Leer
            </button>
          </a>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center p-0">
          <img className="w-1-3" alt="house" src={'/assets/images/news.jpg'}/>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default App;
