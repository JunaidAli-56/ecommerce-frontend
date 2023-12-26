import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import MetaTag from '../components/MetaTag'
const Store = () => {
    return (
        <>
            <MetaTag title="Our Store" />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper bg-light py-lg-5 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-1'>
                                        <li>Tv</li>
                                        <li>Watch</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Filter By</h3>
                                <div className='ms-1'>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label form-check-title" htmlFor=''>
                                                In Stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id='defaultCheck1' />
                                            <label className='form-check-label form-check-title' htmlFor=''>Out Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Product Tags</h3>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Random Product</h3>
                            </div>
                        </div>
                        <div className="col-9">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store