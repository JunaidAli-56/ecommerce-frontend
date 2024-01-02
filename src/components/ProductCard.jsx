import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodCompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-2.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"


const ProductCard = ({ grid }) => {
    const location = useLocation();
    return (
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <Link to=':id' className="product-card position-relative shadow-light">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src={wish} alt="wish" />
                    </Link>
                </div>
                <div className="product-image d-flex justify-content-center align-items-center">
                    <img src={watch} className="img-fluid" alt="product" />
                    <img src={watch2} className="img-fluid" alt="product" />
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
                    />
                    <p className={`desc ${grid === 12 ? "d-block":"d-none"}`}>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                        <Link>
                            <img src={prodCompare} alt="compare" />
                        </Link>
                        <Link>
                            <img src={view} alt="view" />
                        </Link>
                        <Link>
                            <img src={addcart} alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard