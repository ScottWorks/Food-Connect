import React from "react";
import { Link } from "react-router-dom";
import "./Error403.css"

function Error403() {
    return (
        <div className="error403_body">
            <div className="error403_image">
                403
            </div>
            <div className="error403_subtext">
                Forbidden or No Permission to Access
            </div>
            <Link to="/"><div className="home_button">Return Home</div></Link>
        </div>
    )
}

export default Error403;