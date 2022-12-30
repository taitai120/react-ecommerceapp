import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";

const BlogCard = ({ img, date, title, content }) => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="blog-image">
                    <img src={img} alt="blog" className="img-fluid" />
                </div>
                <div className="blog-content">
                    <p className="date">{date}</p>
                    <h5 className="title">{title}</h5>
                    <p className="desc">{content}</p>
                    <Link to="/" className="btn-buynow">
                        READ MORE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
