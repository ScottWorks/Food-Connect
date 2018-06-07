import React from "react";
import { Link } from "react-router-dom";
import "./Error500.css"
import NewHeader from "./NewHeader.js";

function Error500() {
    return (
        <div className="error500_body">
            {/* <NewHeader /> */}
            <div className="error500_main">
                <div id="error500_5">5</div>00
            </div>
            <div className="error500_subtext">Internal Server Error</div>
            <div className="error500_sub_subtext">Try refreshing the page, or contact us if the problem persists</div>
            <hr className="error500_hr" />
            <Link to="/"><div className="home_button">Return Home</div></Link>
        </div>
    )
}

export default Error500;