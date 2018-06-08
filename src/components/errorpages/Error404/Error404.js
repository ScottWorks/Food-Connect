import React from "react";
import donut from "./donut.png"
import { Link } from "react-router-dom";
import "./Error404.css"

function Error404() {
    return (
        <div className="error404_body">
            <div className="error404_main">
                <div>4</div>
                <img alt="donut" src={donut} />
                <div>4</div>
            </div>
            <div className="error404_subtext">OOPS, SORRY WE CAN'T FIND THAT PAGE!</div>
            <div className="error404_sub_subtext">Either something went wrong, or the page doesn't exist anymore.</div>
            <hr className="error404_hr" />
            <Link to="/"><div className="home_button">Return Home</div></Link>
        </div>
    )
}

export default Error404;