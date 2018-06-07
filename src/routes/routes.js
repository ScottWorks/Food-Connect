import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../components/layouts/LandingPage/LandingPage'
import Business from '../components/layouts/Business/Business'
import NonProfit from '../components/layouts/NonProfit/NonProfit'
import Login from '../components/auth/Login/Login'
import Register from '../components/auth/Registration/Registration'
import BusinessHistory from '../components/layouts/Business/BusinessHistory/BusinessHistory'


export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/business/history' component={BusinessHistory} />
    <Route path='/business' component={Business} />
    <Route path='/nonprofit' component={NonProfit} />
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register} />
  </Switch>
)