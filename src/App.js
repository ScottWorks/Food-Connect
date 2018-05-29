import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import routes from './routes/routes'
import './App.css';

class App extends Component{
 render() {
   return (
     <div className="App">
       <HashRouter>
         {routes}
       </HashRouter>
     </div>
   );
 }
}

export default App;