import React from "react";
import { Link } from "react-router-dom";
import "./Error500.css"
import NewHeader from "./NewHeader.js";

function Error500() {
    return (
        <div className="error500_body">
            <NewHeader/>
            <div className="error500_image">
                500
            </div>
            <div className="error500_subtext">
                <div>Internal Server Error</div>
                {/* <p>Try refreshing the page, or contact us if the problem persists</p> */}
            </div>
            <Link to="/"><div className="home_button">Return Home</div></Link>
        </div>
    )
}

export default Error500;