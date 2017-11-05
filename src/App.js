import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './signup-page/index';
import LandingPage from './landing-page/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
