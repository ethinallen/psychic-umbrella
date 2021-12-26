import React, { Component } from 'react';
import { BrowserView, MobileView } from "react-device-detect";

import Typist from 'react-typist';
import Column from './Column'

import './Home.css'

class HomeDesktop extends Component {

  render() {

    return (
      <div className="Home">
        <div className="page">
          <div className="jumbotron">
            <div className="big-text">
              <Typist cursor={{ hideWhenDone: true }}>
                Hello Party People
              </Typist>
            </div>
            <img className="image" src="https://cdn.andrewemery.io/IMG_5273.jpg" />
          </div>

          <div className="column-container">
            <div className="column" style={{background: '#bf616a'}}>Testing, testing. This is just a test. All of this text here? Just sample text. I typed it 4 at a time. Nothing special. It's not pretty, or functional.. </div>
            <div className="column" style={{background: '#d08770'}}>Testing, testing. This is just a test. All of this text here? Just sample text. I typed it 4 at a time. Nothing special. It's not pretty, or functional.. </div>
            <div className="column" style={{background: '#b48ead'}}>Testing, testing. This is just a test. All of this text here? Just sample text. I typed it 4 at a time. Nothing special. It's not pretty, or functional.. But then again. What happens if I decide to make this longer? is it fair that one div should require so much spcace when all others require so little? What entitles this div to the space it consumes? Are we all entittled to this space iff we need it? This brings one to question.. need itself.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDesktop;
