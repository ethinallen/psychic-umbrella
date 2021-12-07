import React, { Component } from 'react';
import { BrowserView, MobileView } from "react-device-detect";

import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'
import Page from './Page'

import './Home.css'

class Home extends Component {

  render() {

    return (
      <>
        <MobileView><HomeMobile /></MobileView>
        <BrowserView><HomeDesktop /></BrowserView>
      </>
    );
  }
}

export default Home;
