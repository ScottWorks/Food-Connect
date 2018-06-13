import React, { Component } from 'react';

import Auth from './Auth';

import Particles from 'react-particles-js';

import './Login.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: true
    };

    this.updateDevice = this.updateDevice.bind(this);
  }

  componentDidMount() {
    this.updateDevice();
    window.addEventListener('resize', this.updateDevice);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updateDevice);
  }

  updateDevice() {
    this.setState({ isMobile: window.innerWidth <= 667 });
  }

  render() {
    const particlesParams = {
      particles: {
        number: {
          value: 20
        },
        size: {
          value: 9.7
        },
        line_linked: {
          enable_auto: false,
          width: 0,
          distance: 0,
          opacity: 0
        },
        color: {
          value: '#A5BE00'
        }
      }
    };

    return (
      <div className="login-container">
        <Auth />
        {this.state.isMobile ? null : (
          <div className="particles-side-container">
            <Particles 
              params={particlesParams} 
              className="particles-js" 
            />
            <h1>food-connect</h1>
          </div>
        )}
      </div>
    );
  }
}
