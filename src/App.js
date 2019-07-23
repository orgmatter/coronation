import React, { Component } from "react";
import Router from './Router'
import { setCustomText } from 'react-native-global-props'


const customTextProps = {
  style: {
    fontFamily: 'Fedra Sans Book',
    fontSize: 14
  }
}

setCustomText(customTextProps);

export default class App extends Component {
  render() {
    return ( 
      <Router/>
    )
  }
}
