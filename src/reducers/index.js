import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import dashboard from './dashboard';

export default (apolloClient) => combineReducers({
  auth,
  dashboard,
  routing: routerReducer,
  apollo: apolloClient.reducer(),
});
