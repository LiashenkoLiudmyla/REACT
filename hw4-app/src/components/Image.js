import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Image.css";

const Image = ({ src, alt, className, width, height, ...attrs}) => {

    if(!src) {
        src = "https://via.placeholder.com/100x100"
    }

    const classes = classNames(className);

    return (
        <img src={src} alt = {alt} className={classes} />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

Image.defaultsProps = {
    src: "https://via.placeholder.com/100x100",
    alt: "img name",
    className: "",
}

export default Image;
