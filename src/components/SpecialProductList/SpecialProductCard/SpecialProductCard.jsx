import React from "react";
import "./SpecialProductCard.scss";
import ReactStarts from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProductCard = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="col-4 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img
                            src="images/watch.jpg"
                            className="img-fluid"
                            alt="watch"
                        />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Havels</h5>
                        <h6 className="title">
                            Samsung Galaxy Note 10+ Mobile phone
                        </h6>
                        <ReactStarts
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            value={5}
                            edit={true}
                        />
                        <p className="price">
                            <span className="red-p">$100</span>
                            &nbsp;
                            <strike>$200</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0">
                                <b>5 </b>days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge rounded-circle p-2 bg-danger">
                                    1
                                </span>
                                :
                                <span className="badge rounded-circle p-2 bg-danger">
                                    1
                                </span>
                                :
                                <span className="badge rounded-circle p-2 bg-danger">
                                    1
                                </span>
                            </div>
                        </div>
                        <div className="prod-count my-3">
                            <p>Products: 5</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <Link className="btn-buynow">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProductCard;
