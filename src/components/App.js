import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

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
