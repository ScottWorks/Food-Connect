import React, { Component } from "react";
import Scone from "./../../../assets/images/scone.png";
import './Header.css'
// import {Link} from "react-router-dom";

class Header extends Component {

    // toggleCSS() {
    //     document.getElementById('bar1').classList.toggle("change_bar1");
    //     document.getElementById('bar2').classList.toggle("change_bar2");
    //     document.getElementById('bar3').classList.toggle("change_bar3");
    // }

    render() {
        return (
            <div id="header_main">
                <div id="header_contents">

                <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a href="#"><li>Sign Up</li></a>
                            <a href="#"><li>Login</li></a>
                            <a href="#"><li>Dashboard</li></a>
                            <a href="#"><li>FAQ</li></a>
                        </ul>
                    </div>

                    <img alt="scone" src={Scone} id="header_img" />

                    {/* <div id="container" onClick={() => this.toggleCSS()}>
                        <div id="bar1"></div>
                        <div id="bar2"></div>
                        <div id="bar3"></div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Header;