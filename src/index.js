import { GRAPHQL_URL } from 'constants';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
// import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import createAppStore from './store';
import getRoutes from './routes';
import { checkLogin } from './actions';

import './index.scss';

const networkInterface = createNetworkInterface(GRAPHQL_URL);

networkInterface.use([{
  /* eslint-disable no-param-reassign */
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const idToken = localStorage.getItem('idToken') || null;
    if (idToken) {
      req.options.headers.Authorization = `Bearer ${idToken}`;
    }
    next();
  },
  /* eslint-enable no-param-reassign */
}]);

const client = new ApolloClient({
  networkInterface,
});

const store = createAppStore(browserHistory, client);
const history = syncHistoryWithStore(browserHistory, store);

checkLogin(store.dispatch);

const rootEl = document.getElementById('app');

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Router history={history}>{getRoutes(store)}</Router>
  </ApolloProvider>,
  rootEl
);
