import Home from './views/Home/Home.js';
import Seattle from './views/Seattle/Seattle.js';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/seattle" component={Seattle} />
        </Switch>

      </Router >

    </div>
  );
}

export default App;
