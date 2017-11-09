import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './landing-page/index';
import Login from './login-page/index';
import SignUp from './signup-page/index';
import Game from './game/index';
import Results from './results/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
