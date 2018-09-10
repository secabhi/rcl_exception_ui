import registerServiceWorker from './registerServiceWorker';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link, browserHistory } from "react-router-dom";
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import App from './App';
import reducers from './reducers';

const enhancers = composeWithDevTools(
    applyMiddleware(promise),
    applyMiddleware(thunk)
);

const store = createStore(reducers,enhancers);

const history = composeWithDevTools(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
