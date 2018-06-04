import React from "react";
import donut from "./donut.png"
import { Link } from "react-router-dom";
import "./Error404.css"

function Error404() {
    return (
        <div className="error404_body">
            <div className="error404_image">
                <div>4</div>
                <img alt="donut" src={donut} />
                <div>4</div>
            </div>
            <div className="error404_subtext">
                Error 404 Page Not Found
            </div>
            <Link to="/"><div className="home_button">Return Home</div></Link>
        </div>
    )
}

export default Error404;