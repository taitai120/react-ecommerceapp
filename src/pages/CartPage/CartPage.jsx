import React from "react";
import "./CartPage.scss";
import Meta from "../../components/Meta/Meta";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import headphone from "../../images/headphone.jpg";

const CartPage = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <Breadcrumb title="Cart" />
            <div className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header d-flex justify-content-between pb-3">
                                <div>Product</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div>Total</div>
                            </div>
                            <div className="cart-body d-flex justify-content-between align-items-center py-3">
                                <div className="d-flex gap-10 align-items-center">
                                    <img src={headphone} alt="" />
                                    <div>
                                        <p>
                                            Kids headphones bulk 10 pack multi
                                            colored
                                        </p>
                                        <p>Size: S</p>
                                        Color: #A85A5A
                                    </div>
                                </div>
                                <div>$100</div>
                                <div>1</div>
                                <div>$100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
