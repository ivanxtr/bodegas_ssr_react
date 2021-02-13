import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

interface propsTypes {
  listing: {
    address: string,
    city: string,
    description: string,
    dock: boolean,
    industrial_park: boolean,
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
  const { 
    photo_1, 
    photo_2, 
    photo_3, 
    photo_4, 
    photo_5, 
    photo_6,
    dock,
    industrial_park,
    office,
    parking,
    vigilancia,
    price,
    city,
    lot_size,
    sqft,
    state,
    zipcode 
  } = props.listing
  const images = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6]
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name: any, booleans: any, numbers: number | string) {
    return { name, booleans, numbers };
  }

  function whatIcon(flag: boolean) {
    if(flag) return (<CheckIcon />)
    return (<CloseIcon />)
  }
  
  const rows = [
    createData('Vigilancia', whatIcon(vigilancia), ''),
    createData('Anden de descarga', whatIcon(dock), ''),
    createData('Parque Industrial', whatIcon(industrial_park), ''),
    createData('Area de oficinas', whatIcon(office), ''),
    createData('Area de Estacionamientos', whatIcon(parking), ''),
    createData('Precio', '', `${price} $`),
    createData('Construccion', '', `${sqft} mts`),
    createData('Superficie', '', `${lot_size} mts`),
    createData('Ciudad', '', city),
    createData('Estado', '', state),
    createData('Codigo Postal', '', zipcode)
  ];

  const classes = useStyles();

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
            <h4 className="display-4">{props.listing.title}</h4>
            <p>
              <button className="btn btn-primary btn-lg">
                Mas Informacion »
              </button>
            </p>
          </div>
      </div>
      <div className="container">
        <p className="">{props.listing.description}.</p>
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
        <div className="container pb-5">
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell> <strong className="heading">Especificaciones</strong></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.booleans}</TableCell>
                    <TableCell align="right">{row.numbers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
} 

export default ImageBanner
