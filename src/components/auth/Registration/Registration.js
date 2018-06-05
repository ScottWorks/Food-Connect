import React, { Component } from 'react'
import axios from 'axios'
// import {connect} from 'react-redux'
import './registration.css'
import Modal from 'react-modal';
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import showPassword from "../../../assets/icons/showpassword.png";
import hidePassword from "../../../assets/icons/hidepassword.png";

class Register extends Component {
    constructor() {
        super()

        this.state = {
            organizationType: '',
            organizationName: '',
            specificType: '',
            addresss: '',
            // streetAddress: '',
            // city: '',
            // statee: '',
            // zip: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            pw: '',
            pwView: false,
            pwShowHide1: false,
            pwShowHide2: false,
            questionClass1: 'test',
            question1ButtonDisable: 'false',
            panel1State:{
                panel1HeaderState:'panel-header',
                panel1BodyState:'panel-body-extended',
                panel1ButtonState: 'false'
            },
            panel2State:{
                panel2HeaderState:'panel-header',
                panel2BodyState:'panel-body-collapsed',
                panel2ButtonState: 'true'
            },
            panel3State:{
                panel3HeaderState:'panel-header',
                panel3BodyState:'panel-body-collapsed',
                panel3ButtonState: 'true'
            },
            panel4State:{
                panel4HeaderState:'panel-header',
                panel4BodyState:'panel-body-collapsed',
                panel4ButtonState: 'true'
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.openBoxes = this.openBoxes.bind(this);
        
        this.handleContinueClickPanel1 = this.handleContinueClickPanel1.bind(this);
        this.handleContinueClickPanel2 = this.handleContinueClickPanel2.bind(this);
        this.handleContinueClickPanel3 = this.handleContinueClickPanel3.bind(this);
        this.handlePanelHeader1Click = this.handlePanelHeader1Click.bind(this);
        this.handlePanelHeader2Click = this.handlePanelHeader2Click.bind(this);
        this.handlePanelHeader3Click = this.handlePanelHeader3Click.bind(this);
        this.handlePanelHeader4Click = this.handlePanelHeader4Click.bind(this);
    }


    handleChange(event) {
        this.setState({
            organizationType: event.target.value
        })
    }

    handleClick() {
        alert(`You are a ${this.state.organizationType}`)
    }

    seePassword(e) {
        this.setState({
            pwView: !this.state.pwView,
        })
        if (e === 1) {
            if (this.state.pwShowHide1 === false) {
                this.setState({
                    pwShowHide1: true
                })
            }
            else {
                this.setState({
                    pwShowHide1: false
                })
            }
        }
        else {
            if (this.state.pwShowHide2 === false) {
                this.setState({
                    pwShowHide2: true
                })
            }
            else {
                this.setState({
                    pwShowHide2: false
                })
            }
        }
    }

    openBoxes(element) {
        var x = document.getElementById(element)
        if (x.style.display === "flex") {
            x.style.display = "none";
            x.style.animation = 'scale-display--reversed .3s'
            x.style.animationFillMode = 'forwards'
        }
        else {
            x.style.display = "flex";
            x.style.animation = 'scale-display .3s'
        }
    }

    clearInputs() {
        this.setState({
            organizationType: '',
            organizationName: '',
            specificType: '',
            streetAddress: '',
            city: '',
            statee: '',
            zip: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            pw: '',
            pwView: false
        })
    }

    registerOrganization() {
        const { organizationType, organizationName, specificType, streetAddress, city, statee, zip, firstName, lastName, phoneNumber, userName, pw } = this.state
        axios.post('/api/auth/register', { organizationType, organizationName, specificType, streetAddress, city, statee, zip, firstName, lastName, phoneNumber, userName, pw }).then(account => {
            console.log(account.data)

        }, this.clearInputs(), window.location.assign('/#/login'))
    }

    handleContinueClickPanel1(){
        let tempPanel1State = Object.assign({}, this.state.panel1State); 
        let tempPanel2State = Object.assign({}, this.state.panel2State); 
        
        if(this.state.organizationType===''){
            alert('Organization Type Required')
        } else {
            // If Already Collapsed - Extend the panel
            tempPanel1State.panel1BodyState = 'panel-body-collapsed';
            tempPanel1State.panel1HeaderState = 'panel-header-completed';
            tempPanel1State.panel1ButtonState = 'false';
            tempPanel2State.panel2BodyState = 'panel-body-extended';
            this.setState({panel1State: tempPanel1State, panel2State: tempPanel2State });
        }
    }

    handleContinueClickPanel2(){
        let tempPanel2State = Object.assign({}, this.state.panel2State); 
        let tempPanel3State = Object.assign({}, this.state.panel3State); 
        
        // TODO:
        if(this.state.organizationType===''){
            alert('Organization Type Required')
        } else {
            // If Already Collapsed - Extend the panel
            tempPanel2State.panel2BodyState = 'panel-body-collapsed';
            tempPanel2State.panel2HeaderState = 'panel-header-completed';
            tempPanel2State.panel2ButtonState = 'false';
            tempPanel3State.panel3BodyState = 'panel-body-extended';
            this.setState({panel2State: tempPanel2State, panel3State: tempPanel3State });
        }
    }

    handleContinueClickPanel3(){
        let tempPanel3State = Object.assign({}, this.state.panel3State); 
        let tempPanel4State = Object.assign({}, this.state.panel4State); 
        
        // TODO:
        if(this.state.organizationType===''){
            alert('Organization Type Required')
        } else {
            // If Already Collapsed - Extend the panel
            tempPanel3State.panel3BodyState = 'panel-body-collapsed';
            tempPanel3State.panel3HeaderState = 'panel-header-completed';
            tempPanel3State.panel3ButtonState = 'false';
            tempPanel4State.panel4BodyState = 'panel-body-extended';
            this.setState({panel3State: tempPanel3State, panel4State: tempPanel4State });
        }
    }

    handlePanelHeader1Click(){
        if(this.state.panel1State.panel1BodyState==='panel-body-collapsed'){

            // Open Up Panel 1
            let tempPanel1State = Object.assign({}, this.state.panel1State);
            tempPanel1State.panel1BodyState = 'panel-body-extended';
            tempPanel1State.panel1HeaderState = 'panel-header';
            this.setState({panel1State:tempPanel1State})

            // Collapse Panels 2,3, & 4
            let tempPanel2State = Object.assign({}, this.state.panel2State);
            tempPanel2State.panel2BodyState = 'panel-body-collapsed';
            let tempPanel3State = Object.assign({}, this.state.panel3State);
            tempPanel3State.panel3BodyState = 'panel-body-collapsed';
            let tempPanel4State = Object.assign({}, this.state.panel4State);
            tempPanel4State.panel4BodyState = 'panel-body-collapsed';
            this.setState({panel2State: tempPanel2State, panel3State: tempPanel3State, panel4State: tempPanel4State})
        }
    }

    handlePanelHeader2Click(){
        
        if(this.state.panel2State.panel2BodyState==='panel-body-collapsed' && this.state.organizationType !== ''){

            // Open Up Panel 2
            let tempPanel2State = Object.assign({}, this.state.panel2State);
            tempPanel2State.panel2BodyState = 'panel-body-extended';
            tempPanel2State.panel2HeaderState = 'panel-header';
            this.setState({panel2State:tempPanel2State})

            // Collapse Panels 1,3, & 4
            let tempPanel1State = Object.assign({}, this.state.panel1State);
            tempPanel1State.panel1BodyState = 'panel-body-collapsed';
            let tempPanel3State = Object.assign({}, this.state.panel3State);
            tempPanel3State.panel3BodyState = 'panel-body-collapsed';
            let tempPanel4State = Object.assign({}, this.state.panel4State);
            tempPanel4State.panel4BodyState = 'panel-body-collapsed';
            this.setState({panel1State: tempPanel1State, panel3State: tempPanel3State, panel4State: tempPanel4State})
        }
    }

    handlePanelHeader3Click(){
        if(this.state.panel3State.panel3BodyState==='panel-body-collapsed'
            && this.state.organizationName !== '' 
            && this.state.organizationType !== ''
            && this.state.specificType !==''){
            // Open Up Panel 3
            let tempPanel3State = Object.assign({}, this.state.panel3State);
            tempPanel3State.panel3BodyState = 'panel-body-extended';
            tempPanel3State.panel3HeaderState = 'panel-header';
            this.setState({panel3State:tempPanel3State})

            // Collapse Panels 1,2, & 4
            let tempPanel1State = Object.assign({}, this.state.panel1State);
            tempPanel1State.panel1BodyState = 'panel-body-collapsed';
            let tempPanel2State = Object.assign({}, this.state.panel2State);
            tempPanel2State.panel2BodyState = 'panel-body-collapsed';
            let tempPanel4State = Object.assign({}, this.state.panel4State);
            tempPanel4State.panel4BodyState = 'panel-body-collapsed';
            this.setState({panel1State: tempPanel1State, panel2State: tempPanel2State, panel4State: tempPanel4State})
        }
    }

    handlePanelHeader4Click(){
        if(this.state.panel4State.panel4BodyState==='panel-body-collapsed'
            && this.state.organizationName !==''
            && this.state.organizationType !==''
            && this.state.specificType !==''
            && this.state.addresss !==''){

            // Open Up Panel 4
            let tempPanel4State = Object.assign({}, this.state.panel4State);
            tempPanel4State.panel4BodyState = 'panel-body-extended';
            tempPanel4State.panel4HeaderState = 'panel-header';
            this.setState({panel4State:tempPanel4State})

            // Collapse Panels 1,2, & 3
            let tempPanel1State = Object.assign({}, this.state.panel1State);
            tempPanel1State.panel1BodyState = 'panel-body-collapsed';
            let tempPanel2State = Object.assign({}, this.state.panel2State);
            tempPanel2State.panel2BodyState = 'panel-body-collapsed';
            let tempPanel3State = Object.assign({}, this.state.panel3State);
            tempPanel3State.panel3BodyState = 'panel-body-collapsed';
            this.setState({panel1State: tempPanel1State, panel2State: tempPanel2State, panel3State: tempPanel3State})
        }
    }


    render() {
        console.log(this.state.panel1State)
        return (
            <div className="registration_main">
                <Header />
                <div className="registration_wrapper">
                    {/* <div className="title_box">
                        <h2 className="section_title">What type of organization are you representing?</h2>
                    </div>

                    <section id='registry-container1'>
                        <div className="account_type_box">
                            <label>
                                <input
                                    type="radio"
                                    value='non-profit'
                                    checked={this.state.organizationType === 'non-profit'}
                                    onChange={this.handleChange}
                                />
                                Non-Profit
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value='business'
                                    checked={this.state.organizationType === 'business'}
                                    onChange={this.handleChange}
                                />
                                Business
                            </label>
                        </div>
                        <button onClick={() => this.openBoxes('registry-container2')} className="collapsible">Continue</button>
                    </section> */}

                    {/* TESTING */}
                    <section className='question-panel'>
                        <div onClick={()=>this.handlePanelHeader1Click()}
                                className={this.state.panel1State.panel1HeaderState}>
                                Organization Type</div>
                        <div className={this.state.panel1State.panel1BodyState}>
                            <h2>What type of organizationare you representing?</h2>
                            <form className='registration-form'>
                            <div>
                                <input required='true' type='radio' checked={this.state.organizationType==='non-profit'} 
                                        value='non-profit' onChange={this.handleChange} id='non-profit'/>
                                <label for='non-profit'>Non-Profit</label>
                                </div>
                                <div>
                                <input type='radio' checked={this.state.organizationType==='business'} 
                                        onChange={this.handleChange}  value='business' id='business'/>
                                <label for='business'>Business</label></div>
                                <input className='form-continue-button' type='submit' onClick={()=> this.handleContinueClickPanel1()} value='Continue'/>
                            </form>     
                        </div>
                    </section>

                    <section className='question-panel'>
                        <div className={this.state.panel2State.panel2HeaderState}
                                onClick={()=>this.handlePanelHeader2Click()}
                        >
                        Organization Info</div>
                        <div className={this.state.panel2State.panel2BodyState}>
                            <h2>Tell us a little more about your organization.</h2>
                            <form className='registration-form'>
                                <input className='form-input-box'
                                    onChange={(e) => this.setState({organizationName: e.target.value})}
                                    required='true' placeholder='Enter Organization Name' 
                                    type='text'/>
                                <input className='form-input-box' 
                                    onChange={(e)=> this.setState({specificType: e.target.value})}
                                    required='true' placeholder={`Enter Type of ${this.state.organizationType}`}
                                    type='text'/>
                                <input className='form-continue-button' type='submit' value='Continue' onClick={()=>this.handleContinueClickPanel2()}/>
                            </form>
                        </div>
                    </section>

                    <section className='question-panel'>
                        <div className={this.state.panel3State.panel3HeaderState}
                                onClick={()=>this.handlePanelHeader3Click()}>Location</div>
                        <div className={this.state.panel3State.panel3BodyState}>
                            <h2>Where are you located?</h2>
                            <form className='registration-form'>
                                <input className='form-input-box'
                                    onChange={(e)=>this.setState({addresss: e.target.value})}
                                    required='true' placeholder='Enter Address'
                                    type='text'/>
                                <input className='form-continue-button' onClick={()=>this.handleContinueClickPanel3()} type='submit' value='Continue'/>
                            </form>
                        </div>
                    </section>

                    <section className='question-panel'>
                        <div className={this.state.panel4State.panel4HeaderState}
                            onClick={()=>this.handlePanelHeader4Click()}
                        >Details</div>
                        <div className={this.state.panel4State.panel4BodyState}>
                            <h2>Tell us the details</h2>
                            <form className='registration-form'>
                                <input onChange={(e)=>this.setState({firstName:e.target.value})} 
                                    value={this.state.firstName} className='form-input-box' required='true'
                                    placeholder='First Name'/>
                                <input onChange={(e)=>this.setState({lastName: e.target.value})} 
                                    value={this.state.lastName} className='form-input-box' required='true'
                                    placeholder='Last Name'/>
                                <input onChange={(e)=>this.setState({phoneNumber: e.target.value})} 
                                    value={this.state.phoneNumber} className='form-input-box' required='true' 
                                    placeholder='Phone Number'/>
                                <input onChange={(e)=>this.setState({userName: e.target.value})} 
                                    value={this.state.userName} className='form-input-box' required='true' 
                                    placeholder='Username'/>
                                <input className='form-input-box' required='true' placeholder='Password'/>
                                <input className='form-input-box' required='true' placeholder='Confirm Password'/>
                                <input className='form-continue-button' type='submit' value='Register'/>
                            </form>
                        </div>
                    </section>
                    

                     {/* TESTING */}

                    {/* <div className="title_box">
                        <h2 className="section_title">Tell us a little more about your organization.</h2>
                    </div>
                    <section id='registry-container2'>
                        <div className="organization_box">
                            <div>
                                <span>Organization Name:</span>
                                <input
                                    type="text"
                                    onChange={(e) => this.setState({ organizationName: e.target.value })}
                                />
                            </div>
                            <div>
                                <span>{`Type of ${this.state.organizationType} you are representing:`}</span>
                                <input
                                    type="text"
                                    placeholder='eg. Church'
                                    onChange={(e) => this.setState({ specificType: e.target.value })}
                                />
                            </div>
                            <button onClick={() => this.openBoxes('registry-container3')} className="collapsible">Continue</button>
                        </div>
                    </section> */}

                    {/* <div className="title_box">
                        <h2 className="section_title">Where are you located?</h2>
                    </div>
                    <section id='registry-container3'>
                        <div>
                            <span>Street Address:</span>
                            <input type="text"
                                value={this.state.streetAddress}
                                onChange={(e) => this.setState({ streetAddress: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>City:</span>
                            <input type="text"
                                value={this.state.city}
                                onChange={(e) => this.setState({ city: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>State:</span>
                            <input type="text"
                                value={this.state.statee}
                                onChange={(e) => this.setState({ statee: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Zip:</span>
                            <input type="text"
                                value={this.state.zip}
                                onChange={(e) => this.setState({ zip: e.target.value })}
                            />
                        </div>
                        <button onClick={() => this.openBoxes('registry-container4')} className="collapsible">Continue</button>
                    </section> */}

                    {/* <div className="title_box">
                        <h2 className="section_title">Finally let's set up a username and login!</h2>
                    </div>
                    <section id='registry-container4'>
                        <div>
                            <span>First Name:</span>
                            <input
                                type="text"
                                value={this.state.firstName}
                                onChange={(e) => this.setState({ firstName: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Last Name:</span>
                            <input
                                type="text"
                                value={this.state.lastName}
                                onChange={(e) => this.setState({ lastName: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Phone Number:</span>
                            <input
                                type="text"
                                maxLength="10"
                                value={this.state.phoneNumber}
                                onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                            />
                        </div>
                        <div>
                            <span>Username:</span>
                            <input
                                type="text"
                                value={this.state.userName}
                                onChange={(e) => this.setState({ userName: e.target.value })}
                            />
                        </div>
                        <div className="password_div">
                            <span>Password:</span>
                            <input
                                type={(this.state.pwShowHide1) ? "text" : "password"}
                                value={this.state.pw}
                                onChange={(e) => this.setState({ pw: e.target.value })}
                            /> {!this.state.pwShowHide1 ? <img src={hidePassword} onClick={() => this.seePassword(1)} className="password_icon" /> : <img src={showPassword} onClick={() => this.seePassword(1)} className="password_icon" />}
                        </div>
                        <div>
                            <span>Confirm Password:</span>
                            <input
                                type={(this.state.pwShowHide2) ? "text" : "password"}
                            /> {!this.state.pwShowHide2 ? <img src={hidePassword} onClick={() => this.seePassword(2)} className="password_icon" /> : <img src={showPassword} onClick={() => this.seePassword(2)} className="password_icon" />}
                        </div>
                        <button className="register_button" onClick={() => this.registerOrganization()}>Register</button>
                    </section> */}

                </div>
            </div>
        )
    }
}

export default (Register)