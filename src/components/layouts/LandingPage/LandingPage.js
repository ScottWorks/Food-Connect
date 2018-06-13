import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './LandingPage.css';
import Footer from './../../components/Footer/Footer';

import * as utilFunc from '../../../config/analyticsUtil';
import { getTotalWeightSaved } from '../../../ducks/analyticsReducer';

class LandingPage extends Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false
    };

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

  componentDidMount() {
    this.props.getTotalWeightSaved();
  }

  render() {
    return (
      <div className="landing_main">
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
              <h4>Who We Are?</h4>
              <p>
                Food-Connect is developed the follow people: Reagan Foronda,
                Jacob Madsen, Courtney Scott, Tayt Low, and Noah Brown.
              </p>
              <h4>What is Food-Connect?</h4>
              <p>
                Food-Connect acts as both a network that connects parties as
                well as a marketplace that facilitates the transactions between
                businesses and non-profits.
              </p>
              <h4>Who is Food-Connect For?</h4>
              <p>
                Food-Connect is for Non-Profits and Businesses who are eagered
                to help reduce food waste while simultaneously helping those
                that are in need.
              </p>
            </div>
          </Modal>
          <div className="landing_main_media">
            <div className="landing-overlay">
              <Link to="/login">
                <div className="landing_login_button">Login</div>
              </Link>
              <Link to="/register">
                <div className="landing_signup_button">Sign Up</div>
              </Link>
            </div>
          </div>
          {/* <section className="landing_hexmap">
                    </section> */}
          <hr />
          <section className="landing_about">
            <h2 className="landing_about_title">About Us</h2>
            <div className="landing_about_container">
              <p>
                It is estimated that in the United States nearly 41 million
                people face challenges with food insecurity. Additionally, 72
                billion pounds of food goes to waste each year prior to reaching
                consumers.The goal of Food-Connect is to provide a platform for
                fast and efficient distribution of food donations to non-profit
                organizations that interacts directly with families in need.
              </p>
              <p>
                Food-Connect will act as both a network that connects parties as
                well as a marketplace that facilitates the transactions between
                businesses and non-profits. As a business you can create a
                “basket” of items to be donated to local food pantries, these
                “baskets” are then advertised to non-profits who can reserve and
                schedule the “basket(s)” for pickup. For every “basket” donation
                an invoice is generated and automatically sent to the business
                for tax purposes.
              </p>
              <p>
                {' '}
                While larger players do an excellent job at redistributing
                larger scale donations there are still gaps in lower scale
                operations, we hope to fill those gaps and create a better
                ecosystem for everyone.
              </p>
            </div>
          </section>
          <hr />
          <section className="landing_stats">
            <h2 className="landing_stats_title">OUR STATS</h2>
            <div className="landing_stats_container">
              <div className="landing_stats_column">
                <p className="landing_stats_p">
                  {utilFunc.formatNumber(
                    Number(this.props.landingTotalSavedByWeight),
                    0,
                    3,
                    ',',
                    '.'
                  )}
                </p>
                <h3>
                  Pounds of<br /> Food Saved
                </h3>
              </div>

              <div className="landing_stats_column">
                <p className="landing_stats_p">
                  {utilFunc.getMealsSaved(this.props.landingTotalSavedByWeight)}
                </p>
                <h3>
                  Number of<br /> Meals Saved
                </h3>
              </div>
            </div>
          </section>
          <hr />
          <section className="landing_getstarted">
            <div className="landing_getstarted_container">
              <div className="landing-overlay">
                <Link to="/register">
                  <div className="landing_getstarted_button">GET STARTED</div>
                </Link>
              </div>
            </div>
          </section>
          <hr />
          <div className="footer-landing">
            <Footer handler={this.openModal} />
          </div>
        </div>
      </div>
    );
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
  };
}

export default connect(
  mapStateToProps,
  { getTotalWeightSaved }
)(LandingPage);
