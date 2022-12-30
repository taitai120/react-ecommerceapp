import React from "react";
import "./ProductCard.scss";
import ReactStarts from "react-rating-stars-component";

const ProductCard = ({
    isLiked,
    img,
    brand,
    name,
    rating,
    discount,
    price,
}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="col-2">
            <div className="product-card position-relative">
                <span className="position-absolute">
                    {/* <img src="images/wish.svg" /> */}
                </span>
                <div className="product-image">
                    <img src={img} alt="blog" className="img-fluid" />
                </div>
                <div className="product-details">
                    <h6 className="brand">{brand}</h6>
                    <h5 className="product-title">{name}</h5>
                    <p className="desc">
                        <ReactStarts
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            value={rating}
                        />
                    </p>
                    {!discount ? (
                        <p className="price">${price}</p>
                    ) : (
                        <>
                            <span className="text-warning fw-4 me-3">
                                ${price - (price * parseInt(discount)) / 100}
                            </span>
                            <span className="text-danger text-decoration-line-through fw-4">
                                ${price}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
