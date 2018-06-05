import React from "react";
import "./LoadingPulse.css"

function LoadingPulse(props) {
    return (
        <div className="pulse_container">
            {props.text ? <div className="pulse_animation">{props.text}</div> : <div className="pulse_animation">Please Wait</div>}
        </div>
    )
}

export default LoadingPulse;