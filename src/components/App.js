import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";

export default function App() {
  // global
  // const token = getTokenSilently();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Layout} />
        <Route path="/" component={Layout} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
