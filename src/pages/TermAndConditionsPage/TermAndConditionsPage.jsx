import React from "react";
import "./TermAndConditionsPage.scss";
import Meta from "../../components/Meta/Meta";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const TermAndConditionsPage = () => {
    return (
        <>
            <Meta title={"Term & Conditions"} />
            <Breadcrumb title="Term & Conditions" />
            <div className="policy-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermAndConditionsPage;
