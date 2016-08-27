
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS,
} from '../actions';

import { authLocalStore } from '../auth';

const defaultStateAuth = {
  isFetching: false,
  isAuthenticated: authLocalStore.isAuthenticated(),
};

export default (state = defaultStateAuth, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.credentials,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
