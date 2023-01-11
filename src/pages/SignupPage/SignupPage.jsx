import React from "react";
import "./SignupPage.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/CustomInput/CustomInput";

const SignupPage = () => {
    return (
        <>
            <Meta title={"Signup"} />
            <Breadcrumb title="Signup" />
            <Container class1="signup-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Sign Up</h3>
                            <form className="d-flex flex-column gap-15">
                                <CustomInput
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form-control"
                                />
                                <div>
                                    <CustomInput
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                </div>
                                <CustomInput
                                    type="tel"
                                    name="mobile"
                                    placeholder="Mobile number"
                                    className="form-control"
                                />
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <CustomInput
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                />
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
            </Container>
        </>
    );
};

export default SignupPage;
