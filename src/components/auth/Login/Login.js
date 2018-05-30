import React, {Component} from 'react'
import {connect} from 'react-redux'
import './login.css'

export default class Auth extends Component {
    constructor(){
        super()

        this.state = {}
    }
    render(){
        return(
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    
}

let mapStateToProps = (state) => {
    return state
}

// export default connect(mapStateToProps, {} )(Auth)