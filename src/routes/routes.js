import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../components/layouts/LandingPage/LandingPage'
import Business from '../components/layouts/Business/Business'
import NonProfit from '../components/layouts/NonProfit/NonProfit'


export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/business' component={Business} />
    <Route path='/nonprofit' component={NonProfit} />
  </Switch>
)