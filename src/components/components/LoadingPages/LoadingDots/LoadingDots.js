import React from "react";
import "./LoadingDots.css"

function LoadingDots(props) {
    return (
        <div className="dots_container">
            {props.text ? <div>{props.text}</div> : <div>Please wait as we load your page</div>}
            <br/>
            <div className="dots_animation">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
            </div>
        </div>
    )
}

export default LoadingDots;