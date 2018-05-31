import React, { Component } from "react";
import Modal from 'react-modal';
import {Link} from "react-router-dom";
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
            <div className="landing_main">
                <Header handler={this.openModal} />
                <div className="landing_wrapper">
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
                    <div className="landing_main_media">
                        <Link to="/login"><div className="landing_login_button">Login</div></Link>
                        <Link to="/register"><div className="landing_signup_button">Sign Up Now</div></Link>
                    </div>
                    <div className="landing_hexmap">
                        <div className="landing_hexmap_title">HexMap Title</div>
                        <div className="landing_hexmap_container"><h3></h3></div>
                    </div>
                    <hr/>
                    <div className="landing_about">
                        <div className="landing_about_title">About Us</div>
                        <div className="landing_about_container"><h3>About Us Text</h3></div>
                    </div>
                    <hr/>
                    <div className="landing_stats">
                        <div className="landing_stats_title">Our Stats</div>
                        <div className="landing_stats_container">
                            <div className="landing_graph1"><h3>Chart 1</h3></div>
                            {/* <hr className="vertical_line"/> */}
                            <div className="landing_graph2"><h3>Chart 2</h3></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="landing_getstarted">
                        {/* <div className="landing_getstarted_title">Get Started With Us</div> */}
                        <div className="landing_getstarted_container">
                        <Link to="/register"><div className="landing_getstarted_button">Get Started With Us</div></Link>
                        </div>
                    </div>
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

export default LandingPage;
