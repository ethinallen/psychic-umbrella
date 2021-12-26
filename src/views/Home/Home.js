import React, { Component } from 'react';
import { BrowserView, MobileView } from "react-device-detect";

import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'
import Column from './Column'

import './Home.css'

class Home extends Component {

  render() {

    return (
      <>
        <MobileView><HomeDesktop /></MobileView>
        <BrowserView><HomeDesktop /></BrowserView>
      </>
    );
  }
}

export default Home;
