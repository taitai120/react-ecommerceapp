import React from "react";
import "./ForgotPasswordPage.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/CustomInput/CustomInput";

const ForgotPasswordPage = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <Breadcrumb title="Forgot Password" />
            <Container class1="forgot-password-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="forgot-password">
                            <h3 className="text-center">Reset Your Password</h3>
                            <p className="text-center mt-2 mb-3">
                                We will send you an email to reset your password
                            </p>
                            <form className="d-flex flex-column gap-15 justify-content-center">
                                <CustomInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <div>
                                    <div className="my-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                        <button className="btn-buynow border-0">
                                            Submit
                                        </button>
                                        <Link to="/login" className="cancel">
                                            Cancel
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ForgotPasswordPage;
