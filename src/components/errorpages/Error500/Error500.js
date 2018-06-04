import React from "react";
import { Link } from "react-router-dom";
import "./Error500.css"

function Error500() {
    return (
        <div className="error500_body">
            <div className="error500_image">
                500
            </div>
            <div className="error500_subtext">
                Internal Server Error
            </div>
            <Link to="/"><div className="home_button">Return Home</div></Link>
        </div>
    )
}

export default Error500;