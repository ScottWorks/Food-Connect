import React, { Component } from "react";
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import "./LandingPage.css"
import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";

import * as utilFunc from '../../../config/analyticsUtil';
import {getTotalWeightSaved} from '../../../ducks/analyticsReducer'

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

    componentDidMount(){
        this.props.getTotalWeightSaved();
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
                            <h4>FAQ 1</h4>
                            <p>Lorem ipsum dolor amet meditation coloring book humblebrag ugh flannel snackwave synth tumeric, man braid pour-over etsy.</p>
                            <h4>FAQ 2</h4>
                            <p>Lorem ipsum dolor amet meditation coloring book humblebrag ugh flannel snackwave synth tumeric, man braid pour-over etsy.</p>
                            <h4>FAQ 3</h4>
                            <p>Lorem ipsum dolor amet meditation coloring book humblebrag ugh flannel snackwave synth tumeric, man braid pour-over etsy.</p>
                        </div>
                    </Modal>
                    <div className="landing_main_media">
                    <div className='landing-overlay'>
                        <Link to="/login"><div className="landing_login_button">Login</div></Link>
                        <Link to="/register"><div className="landing_signup_button">Sign Up</div></Link>
                        </div>
                    </div>
                    <section className="landing_hexmap">
                        <div className="landing_hexmap_title">HexMap Title</div>
                        <div className="landing_hexmap_container"><h3></h3></div>
                    </section>
                    <hr/>
                    <section className="landing_about">
                        <h2 className="landing_about_title">About Us</h2>
                        <div className="landing_about_container">
                            <p>Lorem ipsum dolor amet ethical bushwick etsy street art hammock fixie cloud bread la croix prism flexitarian man braid meh cliche.</p>
                            <p>Actually skateboard chillwave edison bulb literally, live-edge chambray wayfarers craft beer poke pitchfork lo-fi vice flexitarian put a bird on it. Distillery godard PBR palo santo everyday carry live-edge lyft you probably haven't heard of them, kinfolk tumblr freegan raw denim pickled.</p>
                            <p>Fashion axe skateboard prism jean shorts iceland woke 8-bit tumblr hoodie franzen pork belly austin.</p><p>Oh. You need a little dummy text for your mockup?</p><p> How quaint.</p>
                        </div>
                    </section>
                    <hr/>
                    <section className="landing_stats">
                        <h2 className="landing_stats_title">OUR STATS</h2>
                        <div className="landing_stats_container">
                            <div className='landing_stats_column'>
                                <p className='landing_stats_p'>{utilFunc.formatNumber(Number(this.props.landingTotalSavedByWeight),0,3,',','.')}</p>
                                <h3>Pounds of<br/> Food Saved</h3>
                            </div>
                            {/* <hr className="vertical_line"/> TODO: */}
                            <div className='landing_stats_column'>
                                <p className='landing_stats_p'>{utilFunc.getMealsSaved(this.props.landingTotalSavedByWeight)}</p>
                                <h3>Number of<br/> Meals Saved</h3>
                            </div>
                        </div>
                    </section>
                    <hr/>
                    <section className="landing_getstarted">
                        <div className="landing_getstarted_container">
                        <div className='landing-overlay'>
                            <Link to="/register"><div className="landing_getstarted_button">GET STARTED</div></Link></div>
                        </div>
                    </section>
                    <hr/>
                    <div className='footer-landing' >
                        <Footer handler={this.openModal} />
                    </div>
                </div>
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

function mapStateToProps(state) {
    return {
        landingTotalSavedByWeight: state.analyticsReducer.landingTotalSavedByWeight
    }
}

export default connect(mapStateToProps, {getTotalWeightSaved})(LandingPage);
