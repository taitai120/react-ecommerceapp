import React from "react";
import "./CustomInput.scss";

const CustomInput = ({ type, name, placeholder, className }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${className}`}
            />
        </div>
    );
};

export default CustomInput;
