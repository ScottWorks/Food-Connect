import React, { Component } from "react";
// import {Link} from "react-router-dom";
import './Footer.css'
import axios from 'axios'
import * as generalUtil from '../../../config/generalUtil';

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
        this.clearEmailForm = this.clearEmailForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSendEmail(e){
        if(generalUtil.validateEmail(this.state.formEmail)){
            e.preventDefault();
            let email = {
                toEmail: 'devmtngrpproject@gmail.com',
                fromEmail: this.state.formEmail,
                subject: `${this.state.formName} - ${this.state.formSubject}`,
                message: this.state.formMessage
            }
    
            axios.post(`/api/email`, email).then((result) => {
                this.clearEmailForm()
                
            }).catch((err) => {
                console.log(`Error while sending email: ${err}`);
            })
    
            this.clearEmailForm()
        } else {
            alert('Please Enter a Valid Email');
        }

        
    }

    clearEmailForm(){
        this.setState({formEmail: ''});
        this.setState({formName: ''});
        this.setState({formSubject: ''})
        this.setState({formMessage: ''});
    }

    render() {
        return (
            <footer className="footer_main">
                <section className='contact'>
                    <h2>We would love to<br/> hear from you</h2>
                    <form className='email-form'>
                        
                            <input value={this.state.formName} onChange={(e)=> this.handleInputChange(e)} name='formName' required='true' type='text' placeholder='Name'/>
                            <input value={this.state.formEmail} onChange={(e)=> this.handleInputChange(e)} name='formEmail' required='true' type='email' placeholder='Email'/>
                        
                        <input value={this.state.formSubject} onChange={(e)=> this.handleInputChange(e)}  name='formSubject' required='true' type='text' placeholder='Subject'/>
                        <textarea value={this.state.formMessage} onChange={(e)=> this.handleInputChange(e)}  name='formMessage' rows='5' className='message-input' required='true' type='' placeholder='Message'></textarea>
                        <input className='submit-input' onClick={(e)=>this.handleSendEmail(e)} type='submit' value='Submit'/>
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