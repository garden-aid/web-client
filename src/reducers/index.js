import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';

export default (apolloClient) => combineReducers({
  auth,
  routing: routerReducer,
  apollo: apolloClient.reducer(),
});
