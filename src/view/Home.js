import './Home.css';
import React, { Component } from 'react';
import Clock from './componments/ClockComponent/Clock'
import Img from './componments/Img';
import Welcome from './componments/WelcomeComponent/Welcome'

export default class Home extends Component {
  render() {
    return (
      <div class="home-bg">
        <Welcome name="Mars" sex="1" />
        <Clock />
        <Img />
      </div>
    )
  }
}
