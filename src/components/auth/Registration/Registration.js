import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import { connect } from 'react-redux'
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import "./Registration.css"

class Register extends Component {
    constructor() {
        super()

        this.state = {
            organizationType: '',
            modalIsOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleChange(event) {
        this.setState({
            organizationType: event.target.value
        })
    }

    handleClick() {
        alert(`You are a ${this.state.organizationType}`)
    }

    //Function for opening the modal
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    //Function for closing the modal
    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="registration_main">
                    {/*Bringing in the Modal component.*/}
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
                    <span>What type of organization are you representing?</span>
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='non-profit'
                                    checked={this.state.organizationType === 'non-profit'}
                                    onChange={this.handleChange}
                                />
                                Non-Profit
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='business'
                                    checked={this.state.organizationType === 'business'}
                                    onChange={this.handleChange}
                                />
                                Business
                            </label>
                        </li>
                    </ul>
                </div>
                <button onClick={this.handleClick}>Continue</button>

                <br />
                <div>
                    <span>Where are you located?</span>

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