import React, { Component } from "react";
import Scone from "./../../../assets/images/scone.png";
import './Header.css'
import {Link} from "react-router-dom";

class Header extends Component {
    //I commented out this block of code, it because I am currently using a different hamburger menu.

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
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/register"><li>Sign Up</li></Link>
                            <Link to="/login"><li>Login</li></Link>
                            <Link to="/nonprofit"><li>Dashboard</li></Link>
                        </ul>
                    </div>

                    <Link to="/"><img alt="scone" src={Scone} id="header_img" /></Link>
                    {/*I am not using this hamburger right now.*/}
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