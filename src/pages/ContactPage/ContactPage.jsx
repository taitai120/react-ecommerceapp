import React from "react";
import "./ContactPage.scss";
import Meta from "../../components/Meta/Meta";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const Contact = () => {
    return (
        <>
            <Meta title={"Contact"} />
            <Breadcrumb title="Contact" />
            <div className="contact-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.836401866542!2d106.68874372395346!3d10.747088909080253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f08392368eb%3A0xc48d046578df2dce!2zMTU3YS8yNiBELiBCw6EgVHLhuqFjLCBQaMaw4budbmcgMSwgUXXhuq1uIDgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1672973959256!5m2!1svi!2s"
                                width="100%"
                                height={450}
                                className="border-0 w-100"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title mb-4">
                                        Contact Us
                                    </h3>
                                    <form
                                        action=""
                                        className="d-flex flex-column gap-15 w-100"
                                    >
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone number"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                className="w-100 form-control"
                                                cols="30"
                                                rows="4"
                                                placeholder="Comments"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button className="btn-buynow border-0">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">
                                        Get in touch with us
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
