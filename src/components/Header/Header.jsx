import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white">
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-white text-end mb-0">
                                Hotline:
                                <a
                                    className="text-white"
                                    href="tel:+84 789989959"
                                >
                                    0789 989 959
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">TaiTai Store</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Product Here..."
                                />
                                <span className="input-group-text p-3">
                                    <BsSearch className="fs-5" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link
                                        to="/compare-product"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img
                                            src="images/compare.svg"
                                            alt="compare"
                                        />
                                        <p className="mb-0">
                                            Compare <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/wishlist"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img
                                            src="images/wishlist.svg"
                                            alt="wishlist"
                                        />
                                        <p className="mb-0">
                                            Favourite <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/login"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src="images/user.svg" alt="user" />
                                        <p className="mb-0">
                                            Log In <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/cart"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src="images/cart.svg" alt="cart" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">
                                                0
                                            </span>
                                            <p className="mb-0">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img src="images/menu.svg" alt="menu" />
                                        <span className="me-5 d-inline-block">
                                            Shop Categories
                                        </span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/"
                                            >
                                                Action
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/"
                                            >
                                                Action
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/"
                                            >
                                                Action
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/store">Our Store</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
