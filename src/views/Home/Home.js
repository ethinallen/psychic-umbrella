import React, { Component } from 'react';
import { IMAGESTYLE } from './constants.js'
import SwipeableViews from 'react-swipeable-views';

import Page from './Page'

import './Home.css'

const auth0Link = <p> I'm an Identity Solutions Engineer <a href="https://www.auth0.com">@Auth0</a>.</p>;


const styles = {
  slide1: {
    background: 'rgba(46, 52, 64, 0.4)',
  },
  slide2: {
    background: 'rgba(76, 86, 106, 0.4)',
  },
  slide3: {
    background: 'rgba(67, 76, 94, 0.4)',
  },
};

class Home extends Component {

  render() {
    return (
      <div className="App">
        <SwipeableViews enableMouseEvents="true">
          <div className="big-box-thing" style={Object.assign({}, styles.slide, styles.slide1)}>
            <div className="header">INTRODUCING</div>
          </div>
          <div className="big-box-thing" id="frame" style={Object.assign({}, styles.slide, styles.slide2)}>
          <div className="header">ACTION PASTE THRILLER OF THE YEAR</div>

          </div>
          <div className="big-box-thing" style={Object.assign({}, styles.slide, styles.slide3)}>
          <div className="header">GET GRIPPED ON</div>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Home;
