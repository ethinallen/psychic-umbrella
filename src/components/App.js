import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";

export default function App() {
  // global

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
