import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import usePageTracking from 'usePageTracking';

import ReactGA from 'react-ga';

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";

const usePageTracking = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      ReactGA.initialize('UA-183493843-1');
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [initialized]);
};

export default function App() {
  usePageTracking();
  // global
  // const token = getTokenSilently();
  ReactGA.initialize('UA-183493843-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

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
