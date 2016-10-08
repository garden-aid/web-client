
import { authLocalStore } from 'src/auth';
import { push } from 'react-router-redux';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
});

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
});

export const logout = () => (dispatch) => {
  dispatch(requestLogout());
  authLocalStore.removeStoredAuthData();
  dispatch(receiveLogout());
  dispatch(push('/login'));
};
