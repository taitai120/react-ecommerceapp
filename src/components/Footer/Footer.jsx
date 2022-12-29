import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img
                                    src="images/newsletter.png"
                                    alt="newsletter"
                                />
                                <h2 className="mb-0 text-white">
                                    Sign Up for Newsletter
                                </h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Search Product Here..."
                                />
                                <span className="input-group-text p-2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div className="">
                                <address className="text-white fs-6">
                                    TaiTai Store
                                    <br />
                                    Duong Ba Trac, P1 Q8
                                </address>
                                <a
                                    href="tel: +84 789989959"
                                    className="mt-4 d-block mb-1 text-white"
                                >
                                    +84 789 989 959
                                </a>
                                <a
                                    href="mailto:phantuantai7293@gmail.com"
                                    className="mt-4 d-block mb-0 text-white"
                                >
                                    phantuantai7293@gmail.com
                                </a>
                                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                    <a href="">
                                        <BsLinkedin className="text-white fs-4" />
                                    </a>
                                    <a href="">
                                        <BsInstagram className="text-white fs-4" />
                                    </a>
                                    <a href="">
                                        <BsGithub className="text-white fs-4" />
                                    </a>
                                    <a href="">
                                        <BsYoutube className="text-white fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 pt-0 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Refund Policy
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Terms of Service
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 pt-0 mb-1">
                                    Search
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    About Us
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Faq
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Contact
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Size Chart
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 pt-0 mb-1">
                                    Laptops
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Headphones
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Tablets
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by
                                Developer's Corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
