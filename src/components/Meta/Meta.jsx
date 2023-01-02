import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Our Store</title>
            <link rel="canoical" href="http://localhost:3000/store" />
        </Helmet>
    );
};

export default Meta;
