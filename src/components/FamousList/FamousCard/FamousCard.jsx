import React from "react";
import "./FamousCard.scss";

const FamousCard = ({ image, title, name, desc }) => {
    return (
        <div className="col-3">
            <div className="famous-card position-relative">
                <img src={image} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                    <h5 className="text-dark">{title}</h5>
                    <h6 className="text-dark">{name}</h6>
                    <p className="text-dark">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default FamousCard;
