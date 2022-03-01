import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

export default function App() {
  // global

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Layout} />
        <Route path="/" component={Layout} />
        <Route
          exact
          path="/login"
          render={() => <Redirect to="https://andrewemery.us.auth0.com/authorize" />}
        />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
