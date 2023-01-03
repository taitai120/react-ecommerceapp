import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet";
import Meta from "../../components/Meta/Meta";
import "./OurStorePage.scss";

const OurStorePage = () => {
    return (
        <>
            <Meta title={"Our Store"} />
            <Breadcrumb title="Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shopy By Categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value=""
                                            id="abc"
                                            name="abc"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="abc"
                                        >
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value=""
                                            id="abc2"
                                            name="abc2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="abc2"
                                        >
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingFromInput"
                                            placeholder="taiphan@gmail.com"
                                        />
                                        <label htmlFor="floatingFromInput">
                                            From
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingToInput"
                                            placeholder="taiphan@gmail.com"
                                        />
                                        <label htmlFor="floatingToInput">
                                            To
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div>
                                    <div className="d-flex flex-wrap">
                                        <ul className="colors ps-0 d-flex flex-wrap gap-10">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value=""
                                            id="size-s"
                                            name="size-s"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="size-s"
                                        >
                                            S (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value=""
                                            id="size-m"
                                            name="size-m"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="size-m"
                                        >
                                            M (3)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Product Tags</h3>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Random Product</h3>
                            </div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStorePage;
