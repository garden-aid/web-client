import { GRAPHQL_URL } from 'constants';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import createAppStore from './redux/create';
import getRoutes from './routes';


const networkInterface = createNetworkInterface(GRAPHQL_URL);

const apolloClient = new ApolloClient({
  networkInterface,
});

const rootEl = document.getElementById('app');

const scrollBrowserHistory = useScroll(() => browserHistory)();
const store = createAppStore(scrollBrowserHistory, apolloClient);
const history = syncHistoryWithStore(scrollBrowserHistory, store);

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router history={history}>{getRoutes(store)}</Router>
  </ApolloProvider>,
  rootEl
);
