import React, { Component } from 'react';

import './Test.css'

class Test extends Component {
  render() {
    return (
      <div className="container">
        <div className="column" style={{background: "#065a60"}}>
          <div className="row" style={{background: "green"}}></div>
          <div className="row" style={{background: "blue"}}></div>
          <div className="row" style={{background: "white"}}></div>
          <div className="row" style={{background: "black"}}></div>
        </div>
        <div className="column" style={{background: "#1b3a4b"}}></div>
        <div className="column" style={{background: "#3e1f47"}}></div>
        <div className="column" style={{background: "#065a60"}}></div>
      </div>
    );
  }
}

export default Test;
