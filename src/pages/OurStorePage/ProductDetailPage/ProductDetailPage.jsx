import React, { useState } from "react";
import "./ProductDetailPage.scss";
import Meta from "../../../components/Meta/Meta";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import ReactStarts from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../../../components/Colors/Colors";
import { Link } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const ProductDetailPage = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);

    const props = {
        width: 500,
        height: 600,
        zoomWidth: 600,
        img: "https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Smartwatch_1_800x.png?v=1656592889",
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const copyToClipboard = (text) => {
        console.log("text", text);
        let textField = document.createElement("textarea");
        textField.innerHext = text;
        document.body.appendChild(textField);
        textField.select();
        document.r("copy");
        textField.remove();
    };

    return (
        <>
            <Meta title={"Product Detail"} />
            <Breadcrumb title="Product Detail" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img
                                        src="../images/watch.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src="../images/watch.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src="../images/watch.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src="../images/watch.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        Kids Headphones Bulk 10 Pack Multi
                                        Colored
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStarts
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={5}
                                            edit={false}
                                        />
                                        <p className="mb-0 t-review">
                                            (2 reviews )
                                        </p>
                                    </div>
                                    <a href="#review" className="btn-review">
                                        Write a Review
                                    </a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Type:
                                        </h3>
                                        <p className="product-data">GFd</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Brand:
                                        </h3>
                                        <p className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Category:
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Tags:
                                        </h3>
                                        <p className="product-data">
                                            Watch, Fashion
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Availablity:
                                        </h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Size:
                                        </h3>
                                        <div className="product-data d-flex gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                S
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                M
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                X
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Color:
                                        </h3>
                                        <Colors />
                                    </div>
                                    <div className="d-flex align-items-center gap-10 mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Quantity:
                                        </h3>
                                        <div>
                                            <input
                                                type="number"
                                                name=""
                                                id=""
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{ width: "70px" }}
                                            />
                                        </div>
                                        <div className="d-flex align-items-center ms-5 gap-30">
                                            <button className="btn-buynow border-0">
                                                Add To Cart
                                            </button>
                                            <button className="btn-buynow border-0">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href="">
                                                <TbGitCompare className="fs-5 me-2" />
                                                Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <AiOutlineHeart className="fs-5 me-2" />
                                                Add to Wishlist
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2">
                                        <h3 className="product-heading">
                                            Shipping & Returns:
                                        </h3>
                                        <p className="prouct-data">
                                            Free shipping and returns available
                                            on all orders! <br />
                                            We ship all US domestic orders
                                            within
                                            <b>5-10 business days!</b>
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Product Link:
                                        </h3>
                                        <a
                                            href="javacript:void(0);"
                                            onClick={() =>
                                                copyToClipboard(props.img)
                                            }
                                        >
                                            Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quam, harum vitae?
                                    Quisquam quo sint nesciunt beatae assumenda
                                    aut explicabo mollitia sunt at facilis, cum
                                    dolor ut exercitationem nemo ipsum
                                    voluptate!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">
                                            Customer Reviews
                                        </h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStarts
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={5}
                                                edit={false}
                                            />
                                            <p className="mb-0">
                                                Based on 2 Reviews
                                            </p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a
                                                href=""
                                                className="text-dark text-decoration-underline"
                                            >
                                                Write a Review
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div id="review" className="review-form py-4">
                                    <h3 className="review-title">
                                        Write A Review
                                    </h3>
                                    <form
                                        action=""
                                        className="d-flex flex-column gap-15"
                                    >
                                        <div>
                                            <p className="mb-0">Rating</p>
                                            <ReactStarts
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={0}
                                                edit={true}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="comments"
                                                className="mb-1"
                                            >
                                                Your comments (1500)
                                            </label>
                                            <textarea
                                                name="comments"
                                                id=""
                                                className="w-100 form-control"
                                                cols="30"
                                                rows="4"
                                                placeholder="Write your comments here"
                                            ></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn-buynow border-0">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">TaiTai</h6>
                                            <ReactStarts
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={4}
                                                edit={false}
                                            />
                                        </div>
                                        <p className="mt-3">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Optio
                                            necessitatibus officiis sint vero
                                            laboriosam, commodi hic nam autem
                                            repellendus totam quibusdam
                                            consectetur neque maxime facilis,
                                            consequuntur magnam maiores
                                            excepturi ex!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetailPage;
