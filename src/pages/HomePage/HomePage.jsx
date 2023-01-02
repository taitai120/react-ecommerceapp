import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BlogList/BlogCard/BlogCard";
import ProductList from "../../components/ProductList/ProductList";
import BlogList from "../../components/BlogList/BlogList";
import SpecialProductList from "../../components/SpecialProductList/SpecialProductList";
import FamousList from "../../components/FamousList/FamousList";

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
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Computers & Laptop</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/laptop.jpg"
                                        alt="computer"
                                    />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="tv" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Headphones</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/headphone.jpg"
                                        alt="watch"
                                    />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Acc</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/acc.jpg" alt="watch" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Speaker</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" alt="watch" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Homeapp</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/homeapp.jpg" alt="watch" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5 special-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Special Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <SpecialProductList />
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5 featured-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collection
                            </h3>
                        </div>
                        <ProductList />
                    </div>
                </div>
            </section>
            <section className="home-wrapper py-5 famous-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <FamousList />
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5 popular-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                        <ProductList />
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5 marque-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-01.png"
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-02.png"
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-03.png"
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-04.png"
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-05.png"
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-06.png"
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-07.png"
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img
                                            src="images/brand-08.png"
                                            alt="brand"
                                        />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5 blog-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Lastest Blogs
                            </h3>
                        </div>
                        <BlogList />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
