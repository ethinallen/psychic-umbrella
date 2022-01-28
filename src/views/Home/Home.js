import React, { Component } from 'react';
import { BrowserView, MobileView } from "react-device-detect";

import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'

import './Home.css'

const Home = () => {
  return (
    <>
      <MobileView><HomeDesktop /></MobileView>
      <BrowserView><HomeDesktop /></BrowserView>
    </>
  )
}



export default Home;
