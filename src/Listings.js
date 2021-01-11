import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ItemView from './components/ItemView'
import TextBanner from './components/TextBanner'
import Paginator from './components/Paginator'
import Ads from './components/Ads'
import { ApiCallsFactory } from './factories/apiCalls'

function Listings() {
    // state
    const [listings, setListings] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)
    // fetch calls
    useEffect(() => {
        async function fetchData() {
            const call = new ApiCallsFactory('api/listings?page=1')
            const response = await call.getData()
            setListings(response)
        }
        async function fetchCount() {
            const call = new ApiCallsFactory('api/count')
            const response = await call.getData()
            setCount(response)
        }
        fetchData()
        fetchCount()
    },[])

    const getMoreItems = async (index) => {
        setListings([])
        const call = new ApiCallsFactory(`api/listings?page=${index}`)
        const response = await call.getData()
        setListings(response)
        setPage(index)
    }
    
    return (
        <>
            <Header />
            <TextBanner
                title="Propiedades en Renta"
                text="Si no encuentras lo que necesitas, porfavor contactanos a solobodegasrenta.com@hotmail.com"
            />
            { listings.length > 0 ?
                <div className="untree_co-section bg-light">
                    <div className="container">
                        <div className="row">
                            <ItemView listings={listings} />
                        </div>
                    </div>
                    <Paginator
                        count={count}
                        page={page}
                        getMoreItems={getMoreItems}
                    />
                </div>
                : 
                <div className="col-12 d-flex justify-content-center">
                    <img src="/assets/images/loading2.gif" alt="loader"/>
                </div> }
            <Ads />
            <Footer />
        </>
    )
}

export default Listings
    