import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './signup-page/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={SignUp} />
      </Router>
    );
  }
}

export default App;
