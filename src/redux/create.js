import { createStore, applyMiddleware, combineReducers } from 'redux';

import { routerMiddleware, routerReducer } from 'react-router-redux';

import createLogger from 'redux-logger';

export default function createAppStore(browserHistory, apolloClient) {
  const loggerMiddleware = createLogger();
  const reduxRouterMiddleware = routerMiddleware(browserHistory);

  return createStore(
    combineReducers({
      routing: routerReducer,
    }),
    applyMiddleware(
      loggerMiddleware, // neat middleware that logs actions
      reduxRouterMiddleware // allows us to dispatch location changes
    )
  );
}
