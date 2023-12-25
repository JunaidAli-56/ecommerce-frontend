import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const ProductCard = () => {
    return (
        <div className='col-3'>
            <Link className="product-card position-relative shadow-light">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wish" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg"  className="img-fluid" alt="product" />
                    <img src="images/watch-1.png" className="img-fluid"  alt="product" />
                </div>
                <div className="product-detail">
                    <h6 className="product-brand">Havels</h6>
                    <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                    />,
                    <p className='price'>$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard