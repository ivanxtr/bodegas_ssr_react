interface propsTypes {
  listing: {
    address: string,
    city: string,
    description: string,
    dock: boolean,
    industrial_park: string,
    list_date: string,
    lot_size: string,
    office: boolean,
    parking: boolean,
    photo_1: string,
    photo_2: string,
    photo_3: string,
    photo_4: string,
    photo_5: string,
    photo_6: string,
    photo_main: string,
    price: number,
    property_type: string,
    sqft: number,
    state: string,
    title: string,
    vigilancia: boolean,
    zipcode: string
  }
}
const ImageBanner = (props: propsTypes) => {
  return (
    <>
      <div className="jumbotron" 
      style={{
            backgroundImage: `url(${process.env.REACT_APP_HOST + props.listing.photo_main})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
      }}>
          <div className="container">
            <h1 className="display-4 text-white">{props.listing.title}</h1>
            <p className="text-white">{props.listing.description}.</p>
            <p>
              <button className="btn btn-primary btn-lg">
                Mas Informacion »
              </button>
            </p>
          </div>
      </div>
      <div className="container d-flex flex-wrap">
        <section className="col-xl-4 col-lg-3 col-12 my-4">
          <img className="card-img-top" src="http://localhost:8000/media/photos/2021/01/09/WhatsApp-Image-2018-04-06-at-11.17.32-AM.jpeg" alt="Card image cap" />
        </section>
        <section className="col-xl-4 col-lg-3 col-12 my-4">
          <img className="card-img-top" src="http://localhost:8000/media/photos/2021/01/09/WhatsApp-Image-2018-04-06-at-11.17.32-AM.jpeg" alt="Card image cap" />
        </section>
        <section className="col-xl-4 col-lg-3 col-12 my-4">
          <img className="card-img-top" src="http://localhost:8000/media/photos/2021/01/09/WhatsApp-Image-2018-04-06-at-11.17.32-AM.jpeg" alt="Card image cap" />
        </section>
        <section className="col-xl-4 col-lg-3 col-12 my-4">
          <img className="card-img-top" src="http://localhost:8000/media/photos/2021/01/09/WhatsApp-Image-2018-04-06-at-11.17.32-AM.jpeg" alt="Card image cap" />
        </section>
      </div>
    </>
  )
} 

export default ImageBanner
