import React from "react";
import "./ProductCard.scss";
import ReactStarts from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({
    grid,
    isRandom,
    isLiked,
    mainImg,
    subImg,
    brand,
    name,
    rating,
    discount,
    price,
}) => {
    const location = useLocation();

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div
            className={`${
                location.pathname === "/store" ? `col-${grid}` : "col-3"
            }`}
        >
            <Link className="product-card position-relative randomProduct d-block">
                {!isRandom && (
                    <div className="wishlist-icon position-absolute">
                        <img src="images/wish.svg" alt="wishlist" />
                    </div>
                )}
                <div className="product-image">
                    <img src={mainImg} alt="product" className="img-fluid" />
                    {!isRandom ? (
                        <img src={subImg} alt="product" className="img-fluid" />
                    ) : null}
                </div>
                <div className="product-details">
                    <h6 className="brand">{brand}</h6>
                    <h5 className="product-title">{name}</h5>
                    {!isRandom ? (
                        <ReactStarts
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            value={rating}
                            edit={true}
                        />
                    ) : null}
                    <p className="price">${price}</p>
                </div>
                {!isRandom && (
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link>
                                <img
                                    src="images/prodcompare.svg"
                                    alt="compare"
                                />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="addcart" />
                            </Link>
                        </div>
                    </div>
                )}
            </Link>
        </div>
    );
};

export default ProductCard;
