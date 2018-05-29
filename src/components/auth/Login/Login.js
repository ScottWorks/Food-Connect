import React, {Component} from 'react'
import {connect} from 'react-redux'

class Auth extends Component {
    render(){
        return(
            <div>
                Auth Login View.
            </div>
        )
    }
    
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {} )(Auth)