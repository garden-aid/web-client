import Auth0Lock from 'auth0-lock';

import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'constants';
import {
  isAuthenticated,
  getStoredAuthData,
  setStoredAuthData,
  removeStoredAuthData,
} from './offline';

const options = {
  container: 'auth0-form',
  auth: {
    responseType: 'token',
    redirectUrl: window.location.origin + '/callback',
  },
};

const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, options);

export const auth0Lock = lock;
export const authLocalStore = {
  isAuthenticated,
  getStoredAuthData,
  setStoredAuthData,
  removeStoredAuthData,
};
