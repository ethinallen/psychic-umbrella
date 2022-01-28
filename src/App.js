import Home from './views/Home/Home.js';
import Seattle from './views/Seattle/Seattle.js';
import Test from './views/Testing/Test.js';
import Login from './views/Login/Login.js';
import Bin from './views/Bin/Bin.js';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import './App.css';



const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname);
  console.log("fat weiner");
};

ReactGA.initialize("UA-183493843-1", {
  debug: false,
  gaOptions: { cookieFlags: 'max-age=7200;samesite=none;secure' },
});

ReactGA.set({ page: history.location.pathname }); // Update the user's current page
ReactGA.pageview(history.location.pathname);

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/seattle" component={Seattle} />
          <Route path="/test" component={Test} />
          <Route path="/login" component={Login} />
          <Route path="/bin" component={Bin} />
        </Switch>
      </Router >
  );
}

export default App;
