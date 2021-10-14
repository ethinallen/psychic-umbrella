import React, { Component } from 'react';
import { IMAGESTYLE } from './constants.js'

import Page from './Page'

import './Home.css'

const auth0Link = <p> I'm an Identity Solutions Engineer <a href="https://www.auth0.com">@Auth0</a>.</p>;


class Home extends Component {

  render() {
    return (
      <div id="testing">
        <div className="home-container">
        <div className="Page" id="first">
          <Page
            imageBlockStyle = {{
                ...IMAGESTYLE,
                float: "left",
                backgroundImage: "url(https://cdn.andrewemery.io/drew.jpg)",
            }}

            textBlockStyle={{
              float:'right',
              backgroundColor: '#264653',
              color: 'white'
            }}
            headline={'My name is \nDrew Emery.'}
            subtext={"I am a recent Clemson University Alum. I like biking, racing, and small Japanese cars. I love learning and challenging myself. Scroll to learn more about me!"}
            direction="right"
          />
        </div>
        <div className="Page" id="second">
          <Page
            textBlockStyle={{
              float: 'left',
              backgroundColor: '#f4a261',
              color: 'white'
            }}
            imageBlockStyle={{
              ...IMAGESTYLE,
              float:'right',
              backgroundImage: 'url(https://cdn.andrewemery.io/background.png)',
              backgroundPosition: "bottom right"
            }}

            headline={auth0Link}
            subtext={'I want everyone to build secure web applications. Talk to me and we can find out how Auth0 can help you accomplish that!'}
            direction="left"

            />
        </div>

        <div className="Page" id="third">
          <Page
            imageBlockStyle={{
              ...IMAGESTYLE,
              backgroundImage: 'url(https://cdn.andrewemery.io/needle_telescope.png)',
            }}
            textBlockStyle={{
              backgroundColor: '#2a9d8f'
          }}

          headline={"I'm based out of Seattle."}
          subtext={"My watch never left Seattle time! From the moment I crossed into PST this winter I set my watch and only looked forward. The Pacific Northwest is my favorite locale and I look forward to making The Emerald City my home."}
          direction="right"
          />
        </div>

        <div className="Page">
          <Page
            imageBlockStyle={{
              ...IMAGESTYLE,
              float: 'right',
              backgroundImage: 'url(https://cdn.andrewemery.io/IMG_3857.png)',
              backgroundPosition: "75% 10%"
            }}
          textBlockStyle={{
            float:'left',
            backgroundColor: '#e76f51'
        }}

          headline={"I am unconventional."}
          subtext={"I think that everyone could benefit from being a little unconventional. I certainly am. I enjoy my strolls off of the beaten path. I also enjoy talking with others and learning more about their experiences. If you feel so inclined, send an email to me: andrewbemery@gmail.com"} />
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
