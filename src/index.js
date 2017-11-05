import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDom render the 'App' component and it gets id="root" by getElementById function.

// You should go to App.js file (component) and view which component is assigned to Route.

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
