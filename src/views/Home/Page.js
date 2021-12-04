import React from 'react';

import './Page.css';

function Page(props) {

  if (props.backg) {
    return (
      <div className="imagecontainer">
        <div className="leftHalf">
        <div className="media-container">
          <img className="photo" alt="alt" src={props.backg}/>
        </div>
        </div>
        <div className="rightHalf">
        <div className="header">
          {props.content}
        </div>
          <div className="sub">
            {props.sub}
          </div>
        </div>
      </div>

    );
  }

  return (
    <>
      <div className="topHalf">
      <div className="header">
        {props.content}
      </div>
      </div>
      <div className="content-container">
        <div className="sub">
          {props.sub}
        </div>
      </div>
    </>
  );
}

export default Page;
