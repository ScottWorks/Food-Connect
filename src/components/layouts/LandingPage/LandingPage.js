import React, { Component } from "react";
import Modal from 'react-modal';
// import {Link} from "react-router-dom";
import "./LandingPage.css"
import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";

class LandingPage extends Component {
    constructor(props) {
        super();
        this.state = {
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className="landing_main">
                <Header />
                <h2>This is the landing page.</h2>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={modalStyles}
                    contentLabel="Example Modal"
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
                <Footer handler={this.openModal} />
            </div>
        )
    }
}

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

export default LandingPage;

