import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../components/layouts/LandingPage/LandingPage'
import Business from '../components/layouts/Business/Business'
import NonProfit from '../components/layouts/NonProfit/NonProfit'
import Login from '../components/auth/Login/Login'
import Register from '../components/auth/Registration/Registration'
import Error403 from "../components/errorpages/Error403/Error403.js";
import Error404 from "../components/errorpages/Error404/Error404.js";
import Error500 from "../components/errorpages/Error500/Error500.js";
import LoadingPulse from '../components/components/LoadingPages/LoadingPulse/LoadingPulse.js';
import LoadingDots from '../components/components/LoadingPages/LoadingDots/LoadingDots.js';
import BusinessHistory from '../components/layouts/Business/BusinessHistory/BusinessHistory'


export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/business/history' component={BusinessHistory} />
    <Route path='/business' component={Business} />
    <Route path='/nonprofit' component={NonProfit} />
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register} />
    <Route path='/403' component={Error403} />
    <Route path='/404' component={Error404} />
    <Route path='/500' component={Error500} />
    <Route path='/LoadingPulse' component={LoadingPulse} />
    <Route path='/LoadingDots' component={LoadingDots} />
  </Switch>
)