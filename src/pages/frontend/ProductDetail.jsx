import React from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import ProductCard from '../../components/ProductCard'
import ReactStars from "react-rating-stars-component";

const ProductDetail = () => {
    return (
        <>
            <MetaTag title="Product Detail" />
            <BreadCrumb title="Product Detail" />
            <div className="main-product-wrapper py-lg-5 py-3 bg-light">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            h
                        </div>
                        <div className="col-6">
                            g
                        </div>
                    </div>
                </div>
            </div>
            <section className='description-wrapper py-3 py-lg-5 bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='p-3 bg-white'>
                                <h3>Desc</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui pariatur repudiandae sapiente expedita voluptas perferendis? Possimus sint sequi aliquid ab totam officia. Sequi officiis a possimus aliquam ipsa aliquid cumque maxime ipsam perferendis qui.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='reviews-wrapper py-3 py-lg-5 bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-head d-flex justify-content-between align-items-end bg-white p-3">
                                <div>
                                    <h3>Reviews</h3>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 reviews</p>
                                    </div>
                                </div>
                                <div>
                                    <a href="">Write a review</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='popular-wrapper py-3 py-lg-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Our Popular Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail;