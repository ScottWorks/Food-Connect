import React, { Component } from "react";
import Scone from "./../../../assets/images/scone.png";
import './NewHeader.css'
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: 'ham-menu-icon',
            menuName: 'closed-menu'
        }
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    toggleHamburger() {
        if (this.state.className === 'ham-menu-icon') {
            this.setState({ className: 'ham-menu-icon-clicked' });
            this.setState({ menuName: 'open-menu' });
        } else if (this.state.className === 'ham-menu-icon-clicked') {
            this.setState({ className: 'ham-menu-icon' })
            this.setState({ menuName: 'closed-menu' })
        }
    }

    render() {
        return (
            <div id="header_main">
                <Link to="/"><img alt="scone" src={Scone} id="header_img" /></Link>
                <h1>CRUMB</h1>
                <ul className={this.state.menuName}>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/register"><li>Sign Up</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/business"><li>Business</li></Link>
                    <Link to="/nonprofit"><li>Non-Profit</li></Link>
                </ul>

                <div className={this.state.className} onClick={() => this.toggleHamburger()}>
                    <div className='bar-1'></div>
                    <div className='bar-2'></div>
                    <div className='bar-3'></div>
                </div>
            </div>
        )
    }
}

export default Header;