import React, {Component} from 'react'
import axios from 'axios'

export default class Auth extends Component {
    constructor(){
        super()

        this.state = {
            userName: '',
            pw: ''
        }
    }

    handleClick() {
        axios.post('/api/auth/login', {userName: this.state.userName, pw: this.state.pw}).then( () => {
            console.log('We did the thing!')
        })
    }

    render(){
        console.log(this.state)
        const { userName, pw } = this.state
        return (
            <div>
               <div className='login-wrapper'>
                   <span>Username</span>
                   <input
                    onChange={ (e) => this.setState({ userName: e.target.value }) }
                    type='text'
                   />
                   <span>Password</span>
                   <input
                    onChange={ (e) => this.setState({ pw: e.target.value }) }
                    type='password'
                   />
                   <div>
                       <button onClick={() => this.handleClick( userName, pw )}>Login</button>
                   </div>
               </div>
            </div>
        )
    }
    
}

// let mapStateToProps = (state) => {
//     return state
// }

// export default connect(mapStateToProps, {} )(Auth)