import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import MetaTag from '../../components/MetaTag'

const Checkout = () => {
    return (
        <>
            <section className="checkout-wrapper py-lg-5 py-3">
                <div className="container-xxl">
                    <div className="row ">
                        <div className="col-7">
                            <div className="checkout-data-details">
                                <h3 className="logo-name">Vouge</h3>
                                <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        &nbsp; {">"}
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact Information</h4>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout