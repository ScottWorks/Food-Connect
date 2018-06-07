import React from "react";
import { Link } from "react-router-dom";
import "./Error403.css";
import noSymbol from "./no.png";

function Error403() {
    return (
        <div className="error403_body">
            <div className="error403_main">
            <div>4</div>
            <img src={noSymbol}/>
            <div>3</div>
            </div>
            <div className="error403_subtext">Forbidden or No Permission to Access!</div>
            <div className="error403_sub_subtext">You do not have permission to view this resource.</div>
            <hr className="error403_hr"/>
            <Link to="/"><div className="home_button">Return Home</div></Link>
        </div>
    )
}

export default Error403;