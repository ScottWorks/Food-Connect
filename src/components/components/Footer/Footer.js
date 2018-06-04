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
            formMessage: '',
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSendEmail= this.handleSendEmail.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSendEmail(){
        let email = {
            toEmail: 'devmtngrpproject@gmail.com',
            fromEmail: this.state.formEmail,
            subject: `${this.state.formName} - ${this.state.formSubject}`,
            message: this.state.formMessage
        }

        axios.post(`/api/email`, email).then((result) => {
            
        }).catch((err) => {
            console.log(`Error while sending email: ${err}`);
        })
    }

    render() {
        return (
            <footer className="footer_main">
                <section className='contact'>
                    <h2>We would love to<br/> hear from you</h2>
                    <form className='email-form'>
                        
                            <input onChange={(e)=> this.handleInputChange(e)} name='formName' required='true' type='text' placeholder='Name'/>
                            <input onChange={(e)=> this.handleInputChange(e)} name='formEmail' required='true' type='email' placeholder='Email'/>
                        
                        <input onChange={(e)=> this.handleInputChange(e)}  name='formSubject' required='true' type='text' placeholder='Subject'/>
                        <textarea onChange={(e)=> this.handleInputChange(e)}  name='formMessage' rows='5' className='message-input' required='true' type='' placeholder='Message'></textarea>
                        <input className='submit-input' onClick={()=>this.handleSendEmail()} type='submit' value='SUBMIT'/>
                    </form>
                    
                </section>
                <section className='additional-info'>
                    <p onClick={()=> this.props.handler()}>FAQS</p>
                    <p>2018 Copyright</p>
                    <p>555.555.5555</p>
                </section>
                
            </footer>
        )
    }
}

export default Footer;