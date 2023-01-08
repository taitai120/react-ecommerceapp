import React from "react";
import "./ProductDetailPage.scss";
import Meta from "../../../components/Meta/Meta";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const ProductDetailPage = () => {
    return (
        <>
            <Meta title={"Product Detail"} />
            <Breadcrumb title="Product Detail" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <section className="home-wrapper-2 py-5 popular-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetailPage;
