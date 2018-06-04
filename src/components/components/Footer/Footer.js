import React, { Component } from "react";
// import {Link} from "react-router-dom";
import './Footer.css'
import axios from 'axios'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formName: '',
            formEmail: '',
            formSubject: '',
            formMessage: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSendEmail(){
        
    }

    render() {
        return (
            <footer className="footer_main">
                {/* <div className="footer_contents">
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
                <section className='copyright'>
                    <p>Copyright 2018</p>
                </section> */}

                <section className='contact'>
                    <h2>We would love to<br/> hear from you</h2>
                    <form className='email-form'>
                        
                            <input onChange={(e)=> this.handleInputChange(e)} name='formName' required='true' type='text' placeholder='Name'/>
                            <input onChange={(e)=> this.handleInputChange(e)} name='formEmail' required='true' type='email' placeholder='Email'/>
                        
                        <input onChange={(e)=> this.handleInputChange(e)}  name='formSubject' required='true' type='text' placeholder='Subject'/>
                        <textarea onChange={(e)=> this.handleInputChange(e)}  name='formMessage' rows='5' className='message-input' required='true' type='' placeholder='Message'></textarea>
                    </form>
                    <button type='submit'>SUBMIT</button>
                </section>
                <section className='additional-info'>

                </section>
                
            </footer>
        )
    }
}

export default Footer;