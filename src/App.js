import Home from './views/Home/Home.js';
import Seattle from './views/Seattle/Seattle.js';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import './App.css';

const history = createBrowserHistory();

// ReactGA.initialize("UA-183493843-1", {
//     debug: false,
//     gaOptions: { cookieFlags: 'max-age=7200;samesite=none;secure' },
//   });
//
// ReactGA.set({ page: history.location.pathname }); // Update the user's current page
// ReactGA.pageview(history.location.pathname);

ReactGA.initialize('UA-183493843-01', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});

ReactGA.set({ page: history.location.pathname }); // Update the user's current page
ReactGA.pageview(history.location.pathname);
function App() {

  // // Initialize google analytics page view tracking
  // history.listen(location => {
  //   ReactGA.set({ page: location.pathname }); // Update the user's current page
  //   ReactGA.pageview(location.pathname); // Record a pageview for the given page
  // });

  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/seattle" component={Seattle} />
        </Switch>
      </Router >
  );
}

export default App;
