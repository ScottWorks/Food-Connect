import React, { Component } from 'react';
import './App.css';
import Footer from "./components/components/Footer/Footer";
import Header from "./components/components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
