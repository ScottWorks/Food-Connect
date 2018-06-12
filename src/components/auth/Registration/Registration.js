import React, { Component } from 'react'
import axios from 'axios'
import SearchInput from '../../components/PredictiveInput/placesAutocomplete'
// import {connect} from 'react-redux'
import './registration.css'
import Modal from 'react-modal';
import Header from "../../components/Header/NewHeader.js";
import Footer from "../../components/Footer/Footer.js";
import showPassword from "../../../assets/icons/showpassword.png";
import hidePassword from "../../../assets/icons/hidepassword.png";
import NewHeader from "../../components/Header/NewHeader.js";


class Register extends Component {
    constructor() {
        super()

        this.state = {
            organizationType: '',
            organizationName: '',
            specificType: '',
            address: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            latitude: '',
            longitude: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            fein: '',
            pw: '',
            pwConfirm: '',
            pwView: false,
            pwShowHide1: false,
            pwShowHide2: false,
            operating_hours : '',
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
            },
            validUserName:true,
            validPassword:true
        }

        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.handleContinueClickPanel1 = this.handleContinueClickPanel1.bind(this);
        this.handleContinueClickPanel2 = this.handleContinueClickPanel2.bind(this);
        this.handleContinueClickPanel3 = this.handleContinueClickPanel3.bind(this);
        this.handlePanelHeader1Click = this.handlePanelHeader1Click.bind(this);
        this.handlePanelHeader2Click = this.handlePanelHeader2Click.bind(this);
        this.handlePanelHeader3Click = this.handlePanelHeader3Click.bind(this);
        this.handlePanelHeader4Click = this.handlePanelHeader4Click.bind(this);
        this.getAddressFromAutoComplete = this.getAddressFromAutoComplete.bind(this);
        this.getLatLngFromAutoComplete = this.getLatLngFromAutoComplete.bind(this);
    }


    handleChange(event) {
        this.setState({
            organizationType: event.target.value
        })
        
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

    clearInputs() {
        this.setState({
            organizationType: '',
            organizationName: '',
            specificType: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            pw: '',
            pwView: false,
            validUserName:true,
            validPassword:true
        })
        
    }

    getAddressFromAutoComplete(formatted_address) {
        const addressSplit = formatted_address.split(', ');
        const stateSplit = addressSplit[2].split(' ');

        this.setState({
            streetAddress: addressSplit[0],
            city: addressSplit[1],
            statee: stateSplit[0],
            zip: stateSplit[1],
            country: addressSplit[3]
        } )
    }

    getLatLngFromAutoComplete(latLng) {
        this.setState({
            latitude: latLng.lat,
            longitude: latLng.lng
        })
    }

    registerOrganization(e) {
        e.preventDefault();
        if(this.state.firstName === '' || this.state.lastName === '' || this.state.phoneNumber===''
            || this.state.userName === '' || this.state.pw === ''){
                alert('Please Fill Out Required Info')
            }

        if(this.state.pw !== this.state.pwConfirm){
            this.setState({validPassword: false})
        } else {

            const { organizationType, organizationName, specificType, streetAddress, city, statee, zip, firstName, lastName, phoneNumber, latitude, longitude, userName, pw, fein, operating_hours } = this.state
            axios.post('/api/auth/register', { organizationType, organizationName, specificType, streetAddress, city, statee, zip, firstName, lastName, phoneNumber, latitude, longitude, userName, pw, fein, operating_hours }).then(account => {
                window.location.assign('/#/login');
                this.clearInputs();
    
            }).catch(err => {
                if(err.response.status === 409)
                this.setState({validUserName: false})
            })
            
        }
    }

    handleContinueClickPanel1(e){
        e.preventDefault();
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

    handleContinueClickPanel2(e){
        e.preventDefault();
        let tempPanel2State = Object.assign({}, this.state.panel2State); 
        let tempPanel3State = Object.assign({}, this.state.panel3State); 
        
        if(this.state.organizationName ==='' || this.state.specificType === '' || this.state.fein===''){
            alert('Please Fill Out Required Info')
        } else {
            // If Already Collapsed - Extend the panel
            tempPanel2State.panel2BodyState = 'panel-body-collapsed';
            tempPanel2State.panel2HeaderState = 'panel-header-completed';
            tempPanel2State.panel2ButtonState = 'false';
            tempPanel3State.panel3BodyState = 'panel-body-extended';
            this.setState({panel2State: tempPanel2State, panel3State: tempPanel3State });
        }
    }

    handleContinueClickPanel3(e){
        e.preventDefault();
        let tempPanel3State = Object.assign({}, this.state.panel3State); 
        let tempPanel4State = Object.assign({}, this.state.panel4State); 

        if(this.state.addresss===''){
            alert('Address Required')
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
        console.log(this.state.address)        
    }

    handlePanelHeader4Click(){
        if(this.state.panel4State.panel4BodyState==='panel-body-collapsed'
            && this.state.organizationName !==''
            && this.state.organizationType !==''
            && this.state.fein !== ''
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
        return (
            <div className="registration_main">
                {/* <Header /> */}
                <NewHeader/>
                <div className="registration_wrapper">
                    <section className='question-panel'>
                        <div onClick={()=>this.handlePanelHeader1Click()}
                                className={this.state.panel1State.panel1HeaderState}>
                                Organization Type</div>
                        <div className={this.state.panel1State.panel1BodyState}>
                            <h2>What type of organization are you representing?</h2>
                            <form className='registration-form'>
                            <div>
                                <input required='true' type='radio' checked={this.state.organizationType==='non-profit'} 
                                    value='non-profit' onChange={this.handleChange} id='non-profit'/>
                                <label htmlFor='non-profit'>Non-Profit</label>
                                </div>
                                <div>
                                <input type='radio' checked={this.state.organizationType==='business'} 
                                    onChange={this.handleChange}  value='business' id='business'/>
                                <label  htmlFor='business'>Business</label></div>

                                <input id="button1" className='form-continue-button' type='submit' onClick={(e)=> this.handleContinueClickPanel1(e)}
                                    value='Continue'/>
                            </form>     
                        </div>
                    </section>
                    <br />

                    <section className='question-panel'>
                        <div className={this.state.panel2State.panel2HeaderState}
                                onClick={()=>this.handlePanelHeader2Click()}
                        >
                        Organization Info</div>
                        <div className={this.state.panel2State.panel2BodyState}>
                            <h2>Tell us a little more about your organization.</h2>
                            <form className='registration-form'>
                                <input id='input1' className='form-input-box'
                                    onChange={(e) => this.setState({organizationName: e.target.value})}
                                    required='true' placeholder='Enter Organization Name' 
                                    type='text'/>
                                <input id='input2' className='form-input-box' 
                                    onChange={(e)=> this.setState({specificType: e.target.value})}
                                    required='true' placeholder={`Enter Type of ${this.state.organizationType}`}
                                    type='text'/>

                                    <input id='input3' className='form-input-box' 
                                    onChange={(e)=> this.setState({fein: e.target.value})}
                                    required='true' placeholder='Enter FEIN'
                                    type='number'
                                    max='999999999'
                                    />


                                <input id="button2" className='form-continue-button' type='submit' value='Continue' onClick={(e)=>this.handleContinueClickPanel2(e)}/>
                            </form>
                        </div>
                    </section>

                    <section className='question-panel'>
                        <div className={this.state.panel3State.panel3HeaderState}
                                onClick={()=>this.handlePanelHeader3Click()}>Location</div>
                        <div className={this.state.panel3State.panel3BodyState}>
                            <h2>Where are you located?</h2>
                            <form className='registration-form'>
                                <SearchInput 
                                    // function from parent to get address data from child predictiveText component
                                    getAddress={this.getAddressFromAutoComplete}
                                    getlatLng={this.getLatLngFromAutoComplete}
                                />
                                <input id="button3" className='form-continue-button' onClick={(e)=>this.handleContinueClickPanel3(e)} type='submit' value='Continue'/>
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
                                <input id='input4' onChange={(e)=>this.setState({firstName:e.target.value})} 
                                    value={this.state.firstName} className='form-input-box' required='true'
                                    type='text' placeholder='First Name'/>
                                <input id='input5' onChange={(e)=>this.setState({lastName: e.target.value})} 
                                    value={this.state.lastName} className='form-input-box' required='true'
                                    type='text' placeholder='Last Name'/>
                                <input id='input6' onChange={(e)=>this.setState({phoneNumber: e.target.value})} 
                                    value={this.state.phoneNumber} className='form-input-box' required='true' 
                                    type='text' placeholder='Phone Number'/>
                                <input id='input7' onChange={(e)=>this.setState({operating_hours: e.target.value})} 
                                    value={this.state.operating_hours} className='form-input-box' required='true' 
                                    type='text' placeholder='Business Hours'/>

                                <input id='input8' onChange={(e)=>this.setState({userName: e.target.value})} 
                                    value={this.state.userName} className='form-input-box' required='true' 
                                    type='text' placeholder='Username'/>

                           


                                <div className='password_div'>
                                    <input id='input9' type={(this.state.pwShowHide1) ? "text" : "password"}
                                        onChange={(e)=>this.setState({pw: e.target.value})}
                                        className='form-input-box' required='true' placeholder='Password'/>
                                    {!this.state.pwShowHide1 ? <img src={hidePassword} onClick={() => this.seePassword(1)} 
                                        className="password_icon" /> : <img src={showPassword} onClick={() => this.seePassword(1)} 
                                        className="password_icon" />}
                                </div>
                                    
                                <div className='password_div'>
                                    <input id='input10' type={(this.state.pwShowHide2) ? "text" : "password"}
                                        className='form-input-box' required='true'
                                        onChange={(e)=>this.setState({pwConfirm: e.target.value})}placeholder='Confirm Password'/>
                                    {!this.state.pwShowHide2 ? <img src={hidePassword} onClick={() => this.seePassword(2)} 
                                        className="password_icon" /> : <img src={showPassword} onClick={() => this.seePassword(2)} 
                                        className="password_icon" />}
                                </div>

                                {
    this.state.validUserName ? null :    (<div className='error-registration'>
    User name taken.<br/>Please choose another.
</div>)
}
                                {
    this.state.validPassword ? null :    (<div className='error-registration'>
    Passwords do not match.<br/>Try again.
</div>)
}

                                <input id='button4' onClick={(e) => this.registerOrganization(e)} 
                                    className='form-continue-button' type='submit' value='Register'/>
                            </form>
                        </div>
                      </section>
                </div>
            </div>
        )
    }
}


export default Register