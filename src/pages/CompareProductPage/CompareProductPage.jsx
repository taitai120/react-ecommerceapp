import React from "react";
import "./CompareProductPage.scss";
import Meta from "../../components/Meta/Meta";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Colors from "../../components/Colors/Colors";

const CompareProductPage = () => {
    return (
        <>
            <Meta title={"Compare Product"} />
            <Breadcrumb title="Compare Product" />
            <div className="compare-product home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        className="img-fluid"
                                        alt="watch"
                                    />
                                    <div className="compare-product-details">
                                        <h5 className="title">
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7
                                            Inch With Wi-Fi +3G Tablet
                                        </h5>
                                        <h6 className="price my-3">$100</h6>
                                        <div>
                                            <div className="product-detail">
                                                <h5>Brand: </h5>
                                                <p>Havels</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Type: </h5>
                                                <p>Watch</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Availability: </h5>
                                                <p>In Stock</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Color: </h5>
                                                <div>
                                                    <Colors />
                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Size: </h5>
                                                <p>S M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        className="img-fluid"
                                        alt="watch"
                                    />
                                    <div className="compare-product-details">
                                        <h5 className="title">
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7
                                            Inch With Wi-Fi +3G Tablet
                                        </h5>
                                        <h6 className="price my-3">$100</h6>
                                        <div>
                                            <div className="product-detail">
                                                <h5>Brand: </h5>
                                                <p>Havels</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Type: </h5>
                                                <p>Watch</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Availability: </h5>
                                                <p>In Stock</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Color: </h5>
                                                <div>
                                                    <Colors />
                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Size: </h5>
                                                <p>S M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        className="img-fluid"
                                        alt="watch"
                                    />
                                    <div className="compare-product-details">
                                        <h5 className="title">
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7
                                            Inch With Wi-Fi +3G Tablet
                                        </h5>
                                        <h6 className="price my-3">$100</h6>
                                        <div>
                                            <div className="product-detail">
                                                <h5>Brand: </h5>
                                                <p>Havels</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Type: </h5>
                                                <p>Watch</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Availability: </h5>
                                                <p>In Stock</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Color: </h5>
                                                <div>
                                                    <Colors />
                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Size: </h5>
                                                <p>S M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProductPage;
