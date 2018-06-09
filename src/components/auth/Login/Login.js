import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import Header from "../../components/Header/NewHeader.js";
import Footer from "../../components/Footer/Footer.js";
import "./Login.css"
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';

export default class Auth extends Component {
    constructor() {
        super()

        this.state = {
            userName: '',
            pw: '',
            isMobile: true,
            invalid: false,
        }
        this.updateDevice = this.updateDevice.bind(this);
    }

    componentDidMount(){
        this.updateDevice();
        window.addEventListener("resize", this.updateDevice)
    }

    componentWillMount(){
        window.removeEventListener("resize", this.updateDevice)
    }

    updateDevice(){
        this.setState({isMobile: window.innerWidth <= 667})
    }
    handleClick(e) {
        e.preventDefault();
        axios.post('/api/auth/login',{ userName: this.state.userName, pw: this.state.pw }).then( res => {
            console.log(res)
            if(res.data === 'You are the chosen one!') {
                window.location.assign('/#/business')
            }
            if(res.data === 'You are also the chosen one!') {
                window.location.assign('/#/nonprofit')
            }
        }).catch(err=>{
            if(err.response.data === 'Wrong Password') {
                this.setState({invalid: true});
            } else if (err.response.data === 'Please create an account before logging in.'){
                alert('Please Create an Account');
            }
        })
    }

    render() {
        
        // Particles JS Options;
        const particlesParams = {
            particles: {
                number: {
                    value: 20
                },
                size: {
                    value: 9.7
                },
                line_linked:{
                    enable_auto: false,
                    width: 0,
                    distance: 0,
                    opacity: 0
                },
                color: {
                    value: "#A5BE00"
                }

            }
        }

        const { userName, pw } = this.state
        return (
            <div className='login-container'>
                <Header />
                <div className='login_wrapper'>

                    <form className='login-form'>
                    <div className='login-in-header'>
                        <h2>Please Sign In</h2>
                    </div>
                    <h2>Username</h2>
                    <input required='true' 
                    name='username'
                        onChange={(e) => this.setState({ userName: e.target.value })}
                        type='text'
                    />
                    <h2>Password</h2>
                    <input
                    required='true' 
                        onChange={(e) => this.setState({ pw: e.target.value })}
                        type='password'
                    />
                    
                        <button type='submit' onClick={(e) => this.handleClick(e)}>LOGIN</button>
                        {

                        }
                    
                    </form>

                    <section className='register-text'>
                        <p>New to Crumb? <Link to='/register'>Please Register</Link></p>
                    </section>
                </div>

                {/* Conditionally Render the Particle Div JS based on Device Size */}
                {
                    this.state.isMobile ? null : (
                        <div className='particles-side-container'>
                            <Particles params={particlesParams} className='particles-js'/>
                            <h1>crumb</h1>
                        </div>
                    )
                }
            </div>
        )
    }
}
