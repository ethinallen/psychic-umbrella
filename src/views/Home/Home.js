import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Page from './Page'

import './Home.css'

class Home extends Component {

  render() {

    return (
      <div className="App">
        <SwipeableViews enableMouseEvents="true">
          <div className="big-box-thing" style={{background: '#065a60'}}>
            <Page content="Hello, It's nice to meet you!" sub="You can call me Drew." backg="https://cdn.andrewemery.io/IMG_5273.jpg"/>
          </div>
          <div className="big-box-thing" id="frame" style={{background: '#0b525b'}}>
            <Page content="Between you and me," sub=" I'm not exactly sure why you're on my website"/>
          </div>
          <div className="big-box-thing" style={{background: '#1b3a4b'}}>
            <section class="rain"></section>
            <Page content="A little about me" sub="I live in Seattle"/>
          </div>
          <div className="big-box-thing" style={{background: '#272640'}}>
            <Page content="I work at Auth0" sub="We help secure applications"/>
          </div>
          <div className="big-box-thing" style={{background: '#312244'}}>
            <Page content="I have a lot of interests" sub="and I'd like to hear about yours!"/>
          </div>
          <div className="big-box-thing" style={{background: '#3e1f47'}}>
            <Page content="If you feel so inclined" sub="you can find updates about my life here."/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Home;
