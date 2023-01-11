import React from "react";
import "./CheckoutPage.scss";
import Meta from "../../components/Meta/Meta";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import headphone from "../../images/headphone.jpg";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/CustomInput/CustomInput";

const CheckoutPage = () => {
    return (
        <>
            <Meta title={"Checkout"} />
            <Breadcrumb title="Checkout" />
            <Container class1="checkout-wrapper home-wrapper-2 py-5">
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
                                        <Link
                                            to="/cart"
                                            className="text-dark total-price"
                                        >
                                            Cart
                                        </Link>
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item total-price active"
                                        aria-current="page"
                                    >
                                        Information
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item total-price active"
                                        aria-current="page"
                                    >
                                        Shipping
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item total-price active"
                                        aria-current="page"
                                    >
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title total">Contact Information</h4>
                            <p className="user-details total">
                                TaiTai (phantuantai7293@gmail.com)
                            </p>
                            <h4 className="title mb-3">Shipping address</h4>
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
                                    <CustomInput
                                        type="text"
                                        className="form-control"
                                        placeholder="First name (optional)"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <CustomInput
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name"
                                    />
                                </div>
                                <div className="w-100">
                                    <CustomInput
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className="w-100">
                                    <CustomInput
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
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark">
                                            <BiArrowBack className="me-2" />{" "}
                                            Return to Cart
                                        </Link>
                                        <Link
                                            to="/store"
                                            className="btn-buynow"
                                        >
                                            Continue to Shopping
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex align-items-center">
                                <div className="w-75 d-flex align-items-center gap-10">
                                    <div className="position-relative">
                                        <span
                                            style={{
                                                top: "-10px",
                                                right: "-10px",
                                                fontSize: "14px",
                                            }}
                                            className="badge bg-secondary text-white rounded-circle position-absolute"
                                        >
                                            1
                                        </span>
                                        <img
                                            src={headphone}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h5 className="total">
                                            Kids Headphone bulk 10 pack multi
                                            colored
                                        </h5>
                                        <p className="total">S / #ABC</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="total">$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Subtotal</p>
                                <p className="total-price">$ 1000</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Shipping</p>
                                <p className="total-price">$ 1000</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-4">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">$ 1000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CheckoutPage;
