import React from "react";
import "./Image.css";

function Image({ src, alt }) {
    return <img className="random-img" src={src} alt={alt} />;
}

export default Image;