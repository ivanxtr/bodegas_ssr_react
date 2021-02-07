import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
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
    zipcode: string,
    photo_: any
  }
}
const ImageBanner = (props: propsTypes) => {
  const { photo_1, photo_2, photo_3, photo_4, photo_5, photo_6 } = props.listing
  const images = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6]
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
        <Gallery>
          { 
            images.map((sr, index) => {
              if (sr !== null) {
                return (
                  <Item
                    original={`${process.env.REACT_APP_HOST + sr}`}
                    width="1024"
                    height="768"
                    key={index}
                  >
                    {({ ref, open }) => (
                      <section className="col-xl-4 col-lg-3 col-12 my-4">
                        <img className="card-img-top" ref={ref as string | ((instance: HTMLImageElement | null) => void) | React.MutableRefObject<HTMLImageElement> | null | undefined} onClick={open} src={`${process.env.REACT_APP_HOST + sr}`} alt="" />
                      </section>
                    )}
                  </Item>
                )
              }
              return ''
            })
          }
        </Gallery>
      </div>
    </>
  )
} 

export default ImageBanner
