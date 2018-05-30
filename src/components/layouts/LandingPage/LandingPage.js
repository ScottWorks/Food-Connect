import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

class LandingPage extends Component {
  render() {
    return (
      <div className="">
        <Header />
        This is the landing page.
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
