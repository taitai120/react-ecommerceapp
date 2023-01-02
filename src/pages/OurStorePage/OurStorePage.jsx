import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet";
import Meta from "../../components/Meta/Meta";

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
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shopy By Categories
                                </h3>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shopy By Categories
                                </h3>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shopy By Categories
                                </h3>
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
