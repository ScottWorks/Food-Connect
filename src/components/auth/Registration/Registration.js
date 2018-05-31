import React, { Component } from 'react'
import axios from 'axios'
// import {connect} from 'react-redux'
import './registration.css'

class Register extends Component {
    constructor() {
        super()

        this.state = {
            organizationType: '',
            oganizationName: '',
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
            pwView: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleChange(event) {
        this.setState({
            organizationType: event.target.value
        })
    }
    
    handleClick() {
        alert(`You are a ${this.state.organizationType}`)
    }
    
    seePassword() {
        this.setState({
            pwView: !this.state.pwView
        })
    }
    
    registerOrganization() {
        const { organizationType, organizationName, specificType, streetAddress, city, state, zip, firstName, lastName, phoneNumber, userName, pw} = this.state
        axios.post('/api/auth/register', { organizationType, organizationName, specificType, streetAddress, city, state, zip, firstName, lastName, phoneNumber, userName, pw} ).then( account => {
            console.log(account.data)
            // this.props.history.push('/login')
        })
    }

    render() {
        return(
            <div>
                <section className='registry-containers'>
                    <span>What type of organization are you representing?</span>
                    <ul>
                        <li>
                            <label>
                                <input 
                                type="radio"
                                value='non-profit'
                                checked={this.state.organizationType === 'non-profit'}
                                onChange={this.handleChange}
                                />
                                Non-Profit
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                type="radio"
                                value='business'
                                checked={this.state.organizationType === 'business'}
                                onChange={this.handleChange}
                                />
                                Business
                            </label>
                        </li>
                    </ul>
                    <button onClick={this.handleClick}>Continue</button>
                </section>
                <br />
                <section className='registry-containers'>
                    <div>
                        <span>What is your organization's name?</span>
                        <input 
                            type="text"
                            onChange={ (e) => this.setState({ organizationName: e.target.value})}
                            /> 
                        <span>{`Can you tell us what type of ${this.state.organizationType} you are representing?`}</span>
                        <input 
                            type="text"
                            placeholder='eg. Church'
                            onChange={ (e) => this.setState({ specificType: e.target.value })}
                        />               
                     </div>
                </section>
                
                <br/>
                <section className='registry-containers'>
                    <span>Where are you located?</span>
                    <div>
                        <span>Street Address</span>
                        <input type="text"
                            value={this.state.streetAddress}
                            onChange={ (e) => this.setState({ streetAddress: e.target.value})}
                        />
                    </div>
                    <div>
                        <span>City</span>
                        <input type="text"
                            value={this.state.city}
                            onChange={ (e) => this.setState({ city: e.target.value})}
                        />
                    </div>
                    <div>
                        <span>streetAddress</span>
                        <input type="text"
                            value={this.state.state}
                            onChange={ (e) => this.setState({ state: e.target.value})}
                        />
                    </div>
                    <div>
                        <span>Zip</span>
                        <input type="text"
                            value={this.state.zip}
                            onChange={ (e) => this.setState({ zip: e.target.value} )}
                        />
                    </div>
                    <button>Continue</button>
                </section>
                <br/>
                <section  className='registry-containers'>
                        <span>Finally Lets figure out your name and how you want to log in.</span>
                    <div>
                        <span>First Name</span>
                        <input 
                            type="text"
                            value={this.state.firstName}
                            onChange={ (e) => this.setState({ firstName: e.target.value })}
                            />
                    </div>
                    <div>
                        <span>Last Name</span>
                        <input 
                            type="text"
                            value={this.state.lastName}
                            onChange={ (e) => this.setState({ lastName: e.target.value })}
                            />
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <input 
                            type="text"
                            maxLength="10"
                            value={this.state.phoneNumber}
                            onChange={ (e) => this.setState({ phoneNumber: e.target.value })}
                            />
                    </div>
                    <div>
                        <span>Username</span>
                        <input 
                            type="text"
                            value={this.state.userName}
                            onChange={ (e) => this.setState({ userName: e.target.value })}
                            />
                    </div>
                    <div>
                        <span>Password</span>
                        <input 
                            type={ (this.state.pwView) ? "text" : "password" }
                            value={this.state.pw}
                            onChange={ (e) => this.setState({ pw: e.target.value }) }
                            /> <span onClick={() => this.seePassword()}>Switch</span>
                    </div>
                    <div>
                        <span>Confirm Password</span>
                        <input 
                            type={ (this.state.pwView) ? "text" : "password" }
                            /> <span onClick={ () => this.seePassword()}>Switch</span>
                    </div>
                </section>
                <button onClick={this.registerOrganization}>Register</button>
            </div>
        )
    }
}

// let mapStateToProps = (state) => {
//     return state
// }

export default (Register)