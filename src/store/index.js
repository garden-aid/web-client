import { createStore, applyMiddleware, compose } from 'redux';

import { routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducerFactory from '../reducers';

export default function createAppStore(browserHistory, client, initialState = {}) {
  const middlewares = [
    routerMiddleware(browserHistory),
    client.middleware(),
    reduxThunk.withExtraArgument(client),
  ];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    reducerFactory(client),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension &&
      process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f
  ));

  return store;
}
