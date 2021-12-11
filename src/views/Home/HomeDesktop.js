import React, { Component } from 'react';

import Page from './Page'

import './Home.css'

class HomeDesktop extends Component {

  render() {

    return (
      <div className="App">
        <div className="jumbotron">

        </div>
        <div className="pages">
              <Page header="Hello, it's nice to meet you!" bkgColor='#065a60' sub="You can call me Drew." backg="https://cdn.andrewemery.io/IMG_5273.jpg"/>
              <Page header="This is my corner of the internet" bkgColor='#1b3a4b' sub="You can expect to find projects, thoughts, and various media on this site."/>
              <Page specialBroken="literally anything can go here because i'm dumb as hell" bkgColor='#3e1f47' sub="ALTHOUGH I am getting better about deploying to dev first. You can expect outages to become less frequent as time goes on."/>
              <Page header="for work I am an identity solutions engineer @Auth0" bkgColor='#272640' sub="we help secure applications"/>
        </div>
      </div>
    );
  }
}

export default HomeDesktop;
