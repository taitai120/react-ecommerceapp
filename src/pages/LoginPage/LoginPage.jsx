import React from "react";
import "./LoginPage.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <Breadcrumb title="Login" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Login</h3>
                                <form className="d-flex flex-column gap-15 justify-content-center">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <Link to="/forgot-password">
                                            Forgot Password?
                                        </Link>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="btn-buynow border-0">
                                                Login
                                            </button>
                                            <Link
                                                to="/signup"
                                                className="signup btn-buynow"
                                            >
                                                Signup
                                            </Link>
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

export default Login;
