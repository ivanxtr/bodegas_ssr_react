import React, { useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { ApiCallsFactory } from './factories/apiCalls'

function Listings() {

    useEffect(() => {
        async function fetchData() {
            const call = new ApiCallsFactory('/api/listings')
            const response = await call.getData()
            console.log(response)
        }
        fetchData()
    },[])
    
    return (
        <>
            <Header />
    
            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <h2 className="text-secondary heading-2">Rent Properties</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="property-entry">
                                <img src="https://preview.colorlib.com/theme/homey/images/property_1.jpg" alt="Image" className="img-fluid"/>
                                <div className="property-specs">
                                <strong className="price d-inline-block">$1,900</strong>/month
                                    <ul className="list-unstyled specs">
                                    <li className="d-inline-flex align-items-center">
                                        <span className="icon-wrap flaticon-bathtub"></span>
                                        <strong>2</strong>
                                    </li>
                                    <li className="d-inline-flex align-items-center">
                                        <span className="icon-wrap flaticon-bed"></span>
                                        <strong>4</strong>
                                    </li>
                                    <li className="d-inline-flex align-items-center">
                                        <span className="icon-wrap flaticon-house-size"></span>
                                        <strong>120<sup>2</sup></strong>
                                    </li>
                                    </ul>
                                    <div className="location d-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="d-block caption">location: </span>
                                        <h3><span>2 Zwar Place, Florey</span></h3>
                                    </div>
                                    <div className="more">
                                        <span className="icon-keyboard_backspace"></span>
                                    </div>
                                    </div>
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <ul className="list-unstyled untree_co-pagination">
                        <li><a href="/">1</a></li>
                        <li><span>2</span></li>
                        <li><a href="/">3</a></li>
                        <li><a href="/">4</a></li>
                        <li><a href="/">5</a></li>
                        </ul> 
                    </div> 
                </div> 
            </div>

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
