import React, { Component } from "react";
import Scone from "./../../../assets/images/scone.png";
import './NewHeader.css'
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: 'ham-menu-icon',
            menuName: 'closed-menu',
            acct_type: null
        }
        this.toggleHamburger = this.toggleHamburger.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
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

    handleLogOut(){
        axios.get('/api/auth/logout').then(res=>{
            window.location.assign('/#/login')
            console.log('Logged Out')
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div id="header_main">
                <Link to="/"><img alt="scone" src={Scone} id="header_img" /></Link>
                <h1>FOOD-CONNECT</h1>
                {/* Conditionally render menu based on who is logged in */}
                {
                    this.state.acct_type === null ? (<div><ul className={this.state.menuName}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/register"><li>Sign Up</li></Link>
                        <Link to="/login"><li>Login</li></Link>
                        <Link to="/business"><li>Business</li></Link>
                        <Link to="/nonprofit"><li>Non-Profit</li></Link>
                        
                    </ul></div>) : null
                }{
                    this.props.acctType === 'b' ? (<div>
                        <ul className={this.state.menuName}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to='/business'><li>Dashboard</li></Link>
                        <Link to='/business/history'><li>History</li></Link>
                        <li className='logout-btn' onClick={()=>this.handleLogOut()}>Logout</li>
                    </ul></div>) : null
                } {
                    this.props.acctType === 'np' ? (<div>
                        <ul className={this.state.menuName}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to='/nonprofit'><li>Dashboard</li></Link>
                        <li  className='logout-btn' onClick={()=>this.handleLogOut()}>Logout</li>
                    </ul></div>) : null
                }
                

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