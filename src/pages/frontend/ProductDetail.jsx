import React, { useState } from 'react'
import MetaTag from '../../components/MetaTag'
import BreadCrumb from '../../components/BreadCrumb'
import ProductCard from '../../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ImageZoom from "react-image-zooom";


const ProductDetail = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <MetaTag title="Product Detail" />
            <BreadCrumb title="Product Detail" />
            <div className="main-product-wrapper py-lg-5 py-3 bg-light">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6 bg-white">
                            <div className="product-detail-image">
                                <div>
                                    <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200"  className="zoom-image"/>
                                </div>
                                <div className="other-product-images mt-2 d-flex flex-wrap justify-content-between">
                                    <div>
                                        <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200"  className="zoom-image"/>
                                    </div>
                                    <div>
                                        <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200"  className="zoom-image"/>
                                    </div>
                                    <div>
                                        <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200"  className="zoom-image"/>
                                    </div>
                                    <div>
                                        <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200"  className="zoom-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            g
                        </div>
                    </div>
                </div>
            </div>
            <section className='description-wrapper py-3 py-lg-5 bg-light'>
                <div className="container-xxl">
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
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className='bg-white p-3'>
                                <div className="review-head d-flex justify-content-between align-items-end pb-2">
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
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a href="#" className='mb-1 text-dark text-decoration-underline'>Write a review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="review-form mt-3">
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <h6 className='mb-0'>Write a review</h6>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                size={24}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='form-control w-100' placeholder='Comments' cols="30" rows="4"></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className="btn bg-dark text-white rounded-5 py-2 px-3">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews">
                                    <div className="review">
                                        <div className='d-flex align-items-center gap-10'>
                                            <h6 className='mb-0'>Jarviz</h6>
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                size={24}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, dolorem?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='popular-wrapper py-3 py-lg-5'>
                <div className="container-xxl">
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