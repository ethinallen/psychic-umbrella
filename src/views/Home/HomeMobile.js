import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { BrowserView, MobileView } from "react-device-detect";

import Page from './Page'

import './Home.css'

class HomeMobile extends Component {

  render() {

    return (
      <>
        <div className="pages">
            <div className="page-container" style={{background: '#065a60'}}>
              <Page header="Hello, it's nice to meet you!" sub="You can call me Drew." backg="https://cdn.andrewemery.io/IMG_5273.jpg"/>
            </div>
            <div className="page-container" style={{background: '#1b3a4b'}}>
              <Page header="This is my corner of the internet" sub="You can expect to find projects, thoughts, and various media on this site."/>
            </div>
            <div className="page-container" style={{background: '#3e1f47'}}>
              <Page specialBroken="true" sub="ALTHOUGH I am getting better about deploying to dev first. You can expect outages to become less frequent as time goes on."/>
            </div>
            <div className="page-container" style={{background: '#272640'}}>
              <Page header="for work I am an identity solutions engineer @Auth0" sub="we help secure applications"/>
            </div>
        </div>
      </>
    );
  }
}

export default HomeMobile;
