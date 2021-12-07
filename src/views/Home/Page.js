import React from 'react';
import { MdDoubleArrow } from "react-icons/md";

import './Page.css';

function Page(props) {

  if (props.backg) {
    return (
      <>
      <div className="imagecontainer">
        <div className="leftHalf">
        <div className="media-container">
          <img className="photo" alt="alt" src={props.backg}/>
        </div>
        </div>
        <div className="rightHalf">
          <div className="header">
            {props.header}
          </div>
          <div className="sub">
            {props.sub}
          </div>

        </div>

      </div>
      <div className = "chevron"><MdDoubleArrow /></div>
</>

    );
  }

  if (props.specialBroken) {
    return (
      <>
      <div className="topHalf">
        <div className="headerContainer">
          <div className="broken-header">sometimes</div>
          <div className="broken-header">this</div>
          <div className="broken-header">site</div>
          <div className="broken-header">may</div>
          <div className="broken-header">be</div>
          <div className="broken-header broken">broken</div>
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

  return (
    <>
      <div className="topHalf">
      <div className="header">
        {props.header}
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
