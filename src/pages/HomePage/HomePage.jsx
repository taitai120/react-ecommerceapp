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
        </>
    );
};

export default HomePage;
