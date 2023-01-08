import React from "react";
import "./ResetPasswordPage.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";

const ResetPasswordPage = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <Breadcrumb title="Reset Password" />
            <div className="reset-password-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                <form className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="New Password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button className="btn-buynow border-0">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPasswordPage;
