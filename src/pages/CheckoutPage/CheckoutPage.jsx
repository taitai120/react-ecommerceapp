import React from "react";
import "./CheckoutPage.scss";
import Meta from "../../components/Meta/Meta";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
    return (
        <>
            <Meta title={"Checkout"} />
            <Breadcrumb title="Checkout" />
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">TaiTai</h3>
                                <nav
                                    style={{ "--bs-breadcrumb-divider": ">" }}
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        &nbsp; /
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Library
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact Information</h4>
                                <p className="user-details">
                                    TaiTai (phantuantai7293@gmail.com)
                                </p>
                                <h4 className="title">Shipping address</h4>
                                <form
                                    action=""
                                    className="d-flex justify-content-between flex-wrap gap-15"
                                >
                                    <div className="w-100">
                                        <select
                                            className="form-control form-select"
                                            name=""
                                            id="floatingAddress"
                                        >
                                            <option value="0" disabled>
                                                Select Country
                                            </option>
                                            <option value="1">Vietnam</option>
                                            <option value="2">
                                                Use a new address
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First name (optional)"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last name"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apartment, suite, ect. (optional)"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <select
                                            name=""
                                            id=""
                                            className="form-control form-select"
                                        >
                                            <option value="" disabled>
                                                City
                                            </option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <select
                                            name=""
                                            id=""
                                            className="form-control form-select"
                                        >
                                            <option value="" disabled>
                                                State
                                            </option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <select
                                            name=""
                                            id=""
                                            className="form-control form-select"
                                        >
                                            <option value="" disabled>
                                                ZIP code
                                            </option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex">
                                            <Link></Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <h1>dasds</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
