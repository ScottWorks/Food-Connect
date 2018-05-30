import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes/routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <HashRouter>
              {routes}
          </HashRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
