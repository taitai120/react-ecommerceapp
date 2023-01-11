import React from "react";
import "./CartPage.scss";
import Meta from "../../components/Meta/Meta";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import headphone from "../../images/headphone.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

const CartPage = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <Breadcrumb title="Cart" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex align-items-center justify-content-between pb-3">
                            <div className="cart-col-1">Product</div>
                            <div className="cart-col-2">Price</div>
                            <div className="cart-col-3">Quantity</div>
                            <div className="cart-col-4">Total</div>
                        </div>
                        <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
                            <div className="cart-col-1 d-flex gap-15 align-items-center">
                                <div className="w-25">
                                    <img
                                        src={headphone}
                                        alt="product image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="w-75">
                                    <h5 className="title">
                                        Kids headphones bulk 10 pack multi
                                        colored
                                    </h5>
                                    <p className="color">red</p>
                                    <p className="size">S</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="form-control"
                                        min={1}
                                        max={10}
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger fs-5" />
                                </div>
                            </div>
                            <div className="cart-col-4">Total</div>
                        </div>
                        <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
                            <div className="cart-col-1 d-flex gap-15 align-items-center">
                                <div className="w-25">
                                    <img
                                        src={headphone}
                                        alt="product image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="w-75">
                                    <h5 className="title">
                                        Kids headphones bulk 10 pack multi
                                        colored
                                    </h5>
                                    <p className="color">red</p>
                                    <p className="size">S</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="form-control"
                                        min={1}
                                        max={10}
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger fs-5" />
                                </div>
                            </div>
                            <div className="cart-col-4">Total</div>
                        </div>
                        <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
                            <div className="cart-col-1 d-flex gap-15 align-items-center">
                                <div className="w-25">
                                    <img
                                        src={headphone}
                                        alt="product image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="w-75">
                                    <h5 className="title">
                                        Kids headphones bulk 10 pack multi
                                        colored
                                    </h5>
                                    <p className="color">red</p>
                                    <p className="size">S</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="form-control"
                                        min={1}
                                        max={10}
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger fs-5" />
                                </div>
                            </div>
                            <div className="cart-col-4">Total</div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/store" className="btn-buynow">
                                Continue to Shopping
                            </Link>
                            <div>
                                <h4>Subtotal: $ 1000</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to="/checkout" className="btn-buynow">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CartPage;
