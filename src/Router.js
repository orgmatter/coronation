import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Login from "./components/onboarding/Login";
import SignUp from "./components/onboarding/SignUp";


export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key='login' component={Login} initial />
          <Scene key='signup' component={SignUp} />
        </Scene>
      </Router>
    )
  }
}
