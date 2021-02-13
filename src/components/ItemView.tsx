import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCar, faDolly, faShieldAlt, faCube, faDiceD6, faLaptop, faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface propsTypes {
  item: {
    address: string,
    dock: boolean,
    industrial_park: boolean,
    lot_size: number,
    office: boolean,
    parking: boolean,
    photo_1: string,
    price: number,
    sqft: number,
    vigilancia: boolean,
    id: number,
  },
  index: number,
  listings: {
    map: any
  } | object[]
}

const ItemView = (props: propsTypes) => {
  return (
      props.listings.map((item: propsTypes['item'], index: propsTypes['index']) => {
        return (
            <div className="col-md-6 col-lg-4" key={index}>
                <div className="property-entry">
                    <img src={item.photo_1} alt="main" width="350" height="210"/>
                    <div className="property-specs">
                      <strong className="price d-inline-block">
                        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </strong>/month
                      <ul className="list-unstyled specs">
                        {item.parking ?
                            <li className="d-inline-flex align-items-center">
                              <FontAwesomeIcon icon={faCar}/>
                              <strong>{item.parking}</strong>
                            </li> : ''
                        }
                        { item.dock ?
                          <li className="d-inline-flex align-items-center">
                            <FontAwesomeIcon icon={faDolly}/>
                          </li> : ''
                        }
                        { item.industrial_park ?
                          <li className="d-inline-flex align-items-center">
                            <FontAwesomeIcon icon={faBuilding}/>
                          </li> : ''
                        }
                        { item.vigilancia ?
                          <li className="d-inline-flex align-items-center">
                            <FontAwesomeIcon icon={faShieldAlt}/>
                          </li> : ''
                        }
                        { item.office ?
                          <li className="d-inline-flex align-items-center">
                            <FontAwesomeIcon icon={faLaptop}/>
                          </li> : ''
                        }
                      </ul>
                      <ul className="list-unstyled specs">
                        { item.lot_size ?
                          <li className="d-inline-flex align-items-center">
                            <FontAwesomeIcon icon={faCube}/>
                            {item.lot_size}
                          </li> : ''
                        }
                        { item.sqft ?
                          <li className="d-inline-flex align-items-center">
                            <FontAwesomeIcon icon={faDiceD6}/>
                            {item.sqft}
                          </li> : ''
                        }
                      </ul>
                      <div className="location d-flex justify-content-between align-items-center">
                        <div>
                          <span className="d-block caption">location: </span>
                          <h3>
                            <span>{item.address}</span>
                          </h3>
                        </div>
                        <div className="more">
                          <a
                            className="d-flex justify-content-center align-items-center"
                            href={`/detail?id=${item.id}`}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                          </a>
                        </div>
                      </div>
                    </div>
                </div> 
            </div>
        )
    })
  )
}

export default ItemView
