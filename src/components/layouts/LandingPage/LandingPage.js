import React, { Component } from "react";
// import {Link} from "react-router-dom";
import Footer from "./components/components/Footer/Footer";
import Header from "./components/components/Header/Header";

class LandingPage extends Component{
    render(){
        return(
            <div className="">
                <Header/>
                 This is the landing page.
                <Footer/>
            </div> 
        )
    }
}

export default LandingPage;

