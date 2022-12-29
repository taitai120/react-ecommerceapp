import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomePage = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img
                                    src="images/main-banner-1.jpg"
                                    alt="main banner"
                                    className="img-fluid rounded-3"
                                />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999 or $41.62/mo</p>
                                    <Link className="btn-buynow">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-01.jpg"
                                        alt="small banner"
                                        className="img-fluid rounded-3"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $1699 or $64.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-02.jpg"
                                        alt="small banner"
                                        className="img-fluid rounded-3"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $599 or $12/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-03.jpg"
                                        alt="small banner"
                                        className="img-fluid rounded-3"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% Off</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p>
                                            Shop the latest band styles and
                                            colors.
                                        </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src="images/catbanner-04.jpg"
                                        alt="small banner"
                                        className="img-fluid rounded-3"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Free Engraving</h4>
                                        <h5>AirPods Max</h5>
                                        <p>
                                            High-fidelity playback & ultra-low
                                            distortion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-30">
                                    <img
                                        src="images/service.png"
                                        alt="services"
                                    />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className="mb-0">
                                            From all orders over $100
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-30">
                                    <img
                                        src="images/service-02.png"
                                        alt="services"
                                    />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className="mb-0">
                                            Save up to 25% off
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-30">
                                    <img
                                        src="images/service-03.png"
                                        alt="services"
                                    />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className="mb-0">
                                            Shop with an expert
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-30">
                                    <img
                                        src="images/service-04.png"
                                        alt="services"
                                    />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className="mb-0">
                                            Get Factory direct price
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-30">
                                    <img
                                        src="images/service-05.png"
                                        alt="services"
                                    />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className="mb-0">
                                            100% Protected Payments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-30">
                                    <div>
                                        <h6>Computers & Laptop</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/laptop.jpg"
                                        alt="computer"
                                    />
                                </div>
                                <div className="d-flex align-items-center gap-30">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className="d-flex align-items-center gap-30">
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="tv" />
                                </div>
                                <div className="d-flex align-items-center gap-30">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
