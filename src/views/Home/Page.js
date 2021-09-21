import React from 'react';
import Particles from 'react-particles-js';

import './Page.css';

var h = window.innerHeight-10;

function Page(props) {

  return (
    <div className="page-container">

      <div className="textBlock" style={props.textBlockStyle}>
      <div className="particleContainer">
      <Particles
        height={h}
        params={{
    	    "particles": {
    	        "number": {
    	            "value": 60
    	        },
    	        "size": {
    	            "value": 1
    	        },
              "move": {
  	            "random": true,
  	            "speed": 2,
  	            "direction": "top",
  	            "out_mode": "out"
  	        }
    	    },
    	    "interactivity": {
    	        "events": {
    	            "onhover": {
    	                "enable": true,
    	                "mode": "repulse"
    	            }
    	        }
    	    }
    	}} />
      </div>
        <div className="text-container">
          <div className="text-header" style={props.color}>{props.headline}</div>
          <div className="subtext-container">

            <div className="subtext" style={props.textBlockStyle}>{props.subtext}</div>
            </div>
        </div>
      </div>

      <div className="imageBlock" style={props.imageBlockStyle}>
      </div>

    </div>
  );
}

export default Page;
