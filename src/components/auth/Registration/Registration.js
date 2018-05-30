import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Register extends Component {
    constructor() {
        super()

        this.state = {
            organizationType: ''
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

    render() {
        return(
            <div>
                <div>
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
                </div>
                <button onClick={this.handleClick}>Continue</button>
                
                <br/>
                <div>
                    <span>Where are you located?</span>

                </div>
            </div>
        )
    }
}

// let mapStateToProps = (state) => {
//     return state
// }

export default (Register)