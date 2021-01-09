import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ItemView from './components/ItemView'
import TextBanner from './components/TextBanner'
import Paginator from './components/Paginator'
import { ApiCallsFactory } from './factories/apiCalls'

function Listings() {

    const [listings, setListings] = useState([])
    useEffect(() => {
        async function fetchData() {
            const call = new ApiCallsFactory('api/listings?page=1')
            const response = await call.getData()
            setListings(response)
        }
        fetchData()
    },[])
    
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
                    <Paginator />
                </div>
                : 
                <div className="col-12 d-flex justify-content-center">
                    <img src="/assets/images/loading.gif" alt="loader"/>
                </div> }

            <div className="untree_co-section">
                <div className="container">
                    <div className="row gutter-v3">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="icon-wrap">
                        <span className="icon-support"></span>
                        </div>
                        <div className="text">
                        <h3 className="heading">Ask our Customer Service</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div> 
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="icon-wrap">
                        <span className="icon-chat_bubble_outline"></span>
                        </div>
                        <div className="text">
                        <h3 className="heading">Visit our Blog</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div> 
                    </div> 
                </div> 
            </div>
            <Footer />
        </>
    )
}

export default Listings
