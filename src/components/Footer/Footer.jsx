import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer className="py-3"></footer>
            <footer className="py-3"></footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center">
                                &copy; {new Date().getFullYear()}; Powered by
                                Developer's Corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
