import React, { Component } from 'react'
import axios from 'axios'
// import {connect} from 'react-redux'
import './registration.css'
import Modal from 'react-modal';
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import showPassword from "../../../assets/icons/showpassword.png";
import hidePassword from "../../../assets/icons/hidepassword.png";

class Register extends Component {
    constructor() {
        super()

        this.state = {
            organizationType: '',
            organizationName: '',
            specificType: '',
            streetAddress: '',
            city: '',
            statee: '',
            zip: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            pw: '',
            pwView: false,
            pwShowHide1: false,
            pwShowHide2: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openBoxes = this.openBoxes.bind(this);
    }


    handleChange(event) {
        this.setState({
            organizationType: event.target.value
        })
    }

    handleClick() {
        alert(`You are a ${this.state.organizationType}`)
    }

    seePassword(e) {
        this.setState({
            pwView: !this.state.pwView,
        })
        if (e === 1) {
            if (this.state.pwShowHide1 === false) {
                this.setState({
                    pwShowHide1: true
                })
            }
            else {
                this.setState({
                    pwShowHide1: false
                })
            }
        }
        else {
            if (this.state.pwShowHide2 === false) {
                this.setState({
                    pwShowHide2: true
                })
            }
            else {
                this.setState({
                    pwShowHide2: false
                })
            }
        }
    }

    openBoxes(element) {
        var x = document.getElementById(element)
        if (x.style.display === "flex") {
            x.style.display = "none";
            x.style.animation = 'scale-display--reversed .3s'
            x.style.animationFillMode = 'forwards'
        }
        else {
            x.style.display = "flex";
            x.style.animation = 'scale-display .3s'
        }
    }

    //Function for opening the modal
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    //Function for closing the modal
    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    clearInputs() {
        this.setState({
            organizationType: '',
            organizationName: '',
            specificType: '',
            streetAddress: '',
            city: '',
            statee: '',
            zip: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            pw: '',
            pwView: false
        })
    }

    registerOrganization() {
        const { organizationType, organizationName, specificType, streetAddress, city, statee, zip, firstName, lastName, phoneNumber, userName, pw } = this.state
        axios.post('/api/auth/register', { organizationType, organizationName, specificType, streetAddress, city, statee, zip, firstName, lastName, phoneNumber, userName, pw }).then(account => {
            console.log(account.data)
            // this.props.history.push('/login')

        }, this.clearInputs(), window.location.assign('/#/login'))
    }

    render() {
        console.log(this.state)
        return (
            <div className="registration_main">
                <Header />
                <div className="registration_wrapper">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={modalStyles}
                        contentLabel="FAQ Modal"
                    >
                        <div className="FAQ_contents">
                            <h3>Frequently Asked Questions</h3>
                            <h4>What do we do?</h4>
                            <p>We uhhh take your expiring food, and give it to someone in need!</p>
                            <h4>What is in it for me?</h4>
                            <p>You get to help those in need, and receive a nifty tax refund.</p>
                            <h4>What if I don't want to save people with my food?</h4>
                            <p>Then you are a bad person...</p>
                        </div>
                    </Modal>
                    <div className="title_box">
                        <span className="section_title">What type of organization are you representing?</span>
                    </div>
                    <section id='registry-container1'>
                        <div className="account_type_box">
                            <label>
                                <input
                                    type="radio"
                                    value='non-profit'
                                    checked={this.state.organizationType === 'non-profit'}
                                    onChange={this.handleChange}
                                />
                                Non-Profit
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value='business'
                                    checked={this.state.organizationType === 'business'}
                                    onChange={this.handleChange}
                                />
                                Business
                            </label>
                        </div>
                        <button onClick={() => this.openBoxes('registry-container2')} className="collapsible">Continue</button>
                    </section>
                    <br />
                    <div className="title_box">
                        <span className="section_title">Tell us a little more about your organization.</span>
                    </div>
                    <section id='registry-container2'>
                        <div className="organization_box">
                            <div>
                                <span>Organization Name:</span>
                                <input
                                    type="text"
                                    onChange={(e) => this.setState({ organizationName: e.target.value })}
                                />
                            </div>
                            <div>
                                <span>{`Type of ${this.state.organizationType} you are representing:`}</span>
                                <input
                                    type="text"
                                    placeholder='eg. Church'
                                    onChange={(e) => this.setState({ specificType: e.target.value })}
                                />
                            </div>
                            <button onClick={() => this.openBoxes('registry-container3')} className="collapsible">Continue</button>
                        </div>
                    </section>
                    <br />
                    <div className="title_box">
                        <span className="section_title">Where are you located?</span>
                    </div>
                    <section id='registry-container3'>
                        <div>
                            <span>Street Address:</span>
                            <input type="text"
                                value={this.state.streetAddress}
                                onChange={(e) => this.setState({ streetAddress: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>City:</span>
                            <input type="text"
                                value={this.state.city}
                                onChange={(e) => this.setState({ city: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>State:</span>
                            <input type="text"
                                value={this.state.statee}
                                onChange={(e) => this.setState({ statee: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Zip:</span>
                            <input type="text"
                                value={this.state.zip}
                                onChange={(e) => this.setState({ zip: e.target.value })}
                            />
                        </div>
                        <button onClick={() => this.openBoxes('registry-container4')} className="collapsible">Continue</button>
                    </section>
                    <br />
                    <div className="title_box">
                        <span className="section_title">Finally let's set up a username and login!</span>
                    </div>
                    <section id='registry-container4'>
                        <div>
                            <span>First Name:</span>
                            <input
                                type="text"
                                value={this.state.firstName}
                                onChange={(e) => this.setState({ firstName: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Last Name:</span>
                            <input
                                type="text"
                                value={this.state.lastName}
                                onChange={(e) => this.setState({ lastName: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Phone Number:</span>
                            <input
                                type="text"
                                maxLength="10"
                                value={this.state.phoneNumber}
                                onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Username:</span>
                            <input
                                type="text"
                                value={this.state.userName}
                                onChange={(e) => this.setState({ userName: e.target.value })}
                            />
                        </div>
                        <div className="password_div">
                            <span>Password:</span>
                            <input
                                type={(this.state.pwShowHide1) ? "text" : "password"}
                                value={this.state.pw}
                                onChange={(e) => this.setState({ pw: e.target.value })}
                            /> {!this.state.pwShowHide1 ? <img src={hidePassword} onClick={() => this.seePassword(1)} className="password_icon" /> : <img src={showPassword} onClick={() => this.seePassword(1)} className="password_icon" />}
                        </div>
                        <div>
                            <span>Confirm Password:</span>
                            <input
                                type={(this.state.pwShowHide2) ? "text" : "password"}
                            /> {!this.state.pwShowHide2 ? <img src={hidePassword} onClick={() => this.seePassword(2)} className="password_icon" /> : <img src={showPassword} onClick={() => this.seePassword(2)} className="password_icon" />}
                        </div>
                        <button className="register_button" onClick={() => this.registerOrganization()}>Register</button>
                    </section>

                </div>
                <Footer handler={this.openModal} />
            </div>
        )
    }
}

//Style for the modal
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};



// let mapStateToProps = (state) => {
//     return state
// }

export default (Register)