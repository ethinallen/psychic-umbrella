import React, { Component } from 'react';
import { IMAGESTYLE } from './constants.js'
import SwipeableViews from 'react-swipeable-views';

import Page from './Page'

import './Home.css'

class Home extends Component {

  render() {

    return (
      <div className="App">
        <SwipeableViews enableMouseEvents="true">
          <div className="big-box-thing" style={{background: 'rgb(37, 0, 14)'}}>
            <Page content="Hello, It's nice to meet you!" sub="You can call me Drew." />
          </div>
          <div className="big-box-thing" id="frame" style={{background: 'rgb(19, 0, 7)'}}>
            <Page content="Between you and me," sub=" I'm not exactly sure why you're on my website"/>
          </div>
          <div className="big-box-thing" style={{background: 'rgba(0, 0, 0, .97)'}}>
            <section class="rain"></section>
            <Page content="A little about me" sub="I live in Seattle"/>
          </div>
          <div className="big-box-thing" style={{background: 'rgb(56, 1, 22, 1)'}}>
            <Page content="I work at Auth0" sub="We help secure applications"/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Home;
