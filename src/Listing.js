import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ImageBanner from './components/ImageBanner'
import { ApiCallsFactory } from './factories/apiCalls'

function Listing() {
  const [listing, setListing] = useState([])
  // fetch calls
  useEffect(() => {
    async function fetchData() {
      const ref = window.location.search
      const id = ref.split('=')
      const finalId = id[id.length - 1]
      const call = new ApiCallsFactory(`api/listing/${finalId}`)
      const response = await call.getData()
      setListing(response)
      console.log(listing)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[])

  return (
    <>
      <Header />
        { 
          listing && listing.title ?
            <ImageBanner
              listing={listing}
            /> 
            : 
            <div className="col-12 d-flex justify-content-center">
              <img src="/assets/images/loading.gif" alt="loader"/>
            </div>
        }
      <Footer />
    </>
  )
}
export default Listing
