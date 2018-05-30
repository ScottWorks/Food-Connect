import React, { Component } from "react";
// import {Link} from "react-router-dom";
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer_main">
                <div className="footer_contents">
                    <div onClick={()=> this.props.handler()}>FAQS</div>
                    <div>
                        <div className="info_boxes">
                            <div className="info_box_title">Contact</div>
                            <div>Tel: (XXX)-XXX-XXXX</div>
                            <div>Fax: (XXX)-XXX-XXXX</div>
                            <div>Email: email@email.com</div>
                        </div>
                    </div>
                    <div>
                        <div className="info_boxes">
                            <div className="info_box_title">Address</div>
                            <div>12345 Coding Street, Provo</div>
                            <div>Utah, 84606,</div>
                            <div>United States</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;