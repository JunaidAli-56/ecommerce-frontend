import React from "react";
import './mainProduct.scss'
const MainProduct = (props) => {
    return (
        <>
            <div className="card main-card-div">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-img-overlay main-card-body ">
                    <h5 className="card-title py-1">{props.heading}</h5>
                    <p className="card-text">{props.desc}</p>
                    <small className="card-text py-0">from $399 or $16.62/mo. from 24/mo.</small>
                </div>
            </div>
        </>

    )
};

export default MainProduct;
