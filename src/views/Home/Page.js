import React from 'react';
import Particles from 'react-particles-js';

import './Page.css';

var h = window.innerHeight-10;

function Page(props) {

  return (
    <>
      <div className="header">
        {props.content}
      </div>
      <div className="sub">
        {props.sub}
      </div>
    </>
  );
}

export default Page;
