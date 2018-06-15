import React, { Component } from 'react';
import axios from 'axios';

import './Login.css';

import { Link } from 'react-router-dom';

export default class Auth extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      pw: '',
      invalid: false
    };
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    axios
      .post('/api/auth/login', {
        userName: this.state.userName,
        pw: this.state.pw
      })
      .then((res) => {
        console.log(res);
        if (res.data === 'You are the chosen one!') {
          window.location.assign('/#/business');
        }
        if (res.data === 'You are also the chosen one!') {
          window.location.assign('/#/nonprofit');
        }
      })
      .catch((err) => {
        if (err.response.data === 'Wrong Password') {
          this.setState({ invalid: true });
        } else if (
          err.response.data === 'Please create an account before logging in.'
        ) {
          alert('Please Create an Account');
          this.clearInputs();
        }
      });
  }

  clearInputs() {
    this.setState({ userName: '', pw: '', invalid: false });
  }

  render() {
    const { userName, pw } = this.state;
    return (
      <div className="login_wrapper">
        <form className="login-form">
          <div className="login-in-header">
            <h2>Please Sign In</h2>
          </div>
          <h2>Username</h2>
          <input
            required="true"
            value={this.state.userName}
            name="username"
            onChange={(e) => this.setState({ userName: e.target.value })}
            type="text"
          />
          <h2>Password</h2>
          <input
            value={this.state.pw}
            required="true"
            onChange={(e) => this.setState({ pw: e.target.value })}
            type="password"
          />

          <button type="submit" onClick={(e) => this.handleClick(e)}>
            Login
          </button>
          {this.state.invalid ? (
            <div className="pw-error-login">
              Incorrect Password<br />Please Try Again
            </div>
          ) : null}
        </form>

        <section className="register-text">
          <p>
            New to Food-Connect? <Link to="/register">Please Register</Link>
          </p>
        </section>

        <div className="link-homepage-container">
          <Link to="/">
            <button className="link-homepage-button">Go Back</button>
          </Link>
        </div>
      </div>
    );
  }
}
