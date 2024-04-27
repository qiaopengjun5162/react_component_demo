import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

// 获取backdrop的根元素
const backdropRoot = document.getElementById("backdrop-root");

function Backdrop(props) {
    // return (<div className="backdrop">{props.children}</div>)
    return ReactDOM.createPortal(
        <div className="backdrop">{props.children}</div>,
        backdropRoot
    );
}

Backdrop.propTypes = {};

export default Backdrop;
