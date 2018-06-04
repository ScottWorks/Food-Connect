import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import "./Login.css"

export default class Auth extends Component {
    constructor() {
        super()

        this.state = {
            userName: '',
            pw: '',
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleClick() {
        axios.post('/api/auth/login',{ userName: this.state.userName, pw: this.state.pw }).then( res => {
            if(res.data === 'You are the chosen one!') {
                window.location.assign('/#/business')
            }
            if(res.data === 'You are also the chosen one!') {
                window.location.assign('/#/nonprofit')
            }
            if(res.data === 'Wrong Password') {
                alert('Wrong Password. Please try again.')
            }
            if(res.data === 'Please create an account before logging in.')
                alert('Please create an account before logging in.')
        })
    }

    //Function for opening the modal
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    //Function for closing the modal
    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        console.log(window.location)
        const { userName, pw } = this.state
        return (
            <div>
                <Header />
                <div className='login_wrapper'>
                    {/*Bringing in the Modal component.*/}
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={modalStyles}
                        contentLabel="FAQ Modal"
                    >
                        <div className="FAQ_contents">
                            <h3>Frequently Asked Questions</h3>
                            <h4>What do we do?</h4>
                            <p>We uhhh take your expiring food, and give it to someone in need!</p>
                            <h4>What is in it for me?</h4>
                            <p>You get to help those in need, and receive a nifty tax refund.</p>
                            <h4>What if I don't want to save people with my food?</h4>
                            <p>Then you are a bad person...</p>
                        </div>
                    </Modal>
                    <form className='login-form'>
                    <h2>Username</h2>
                    <input required='true' 
                        onChange={(e) => this.setState({ userName: e.target.value })}
                        type='text'
                    />
                    <h2>Password</h2>
                    <input
                    required='true' 
                        onChange={(e) => this.setState({ pw: e.target.value })}
                        type='password'
                    />
                    
                        <button type='submit' onClick={() => this.handleClick(userName, pw)}>LOGIN</button>
                    
                    </form>
                </div>
                <Footer handler={this.openModal} />
            </div>
        )
    }

}

//Style for the modal
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// let mapStateToProps = (state) => {
//     return state
// }

// export default connect(mapStateToProps, {} )(Auth)