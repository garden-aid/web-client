import Auth0Lock from 'auth0-lock';

import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'constants';
import {
  isAuthenticated, getStoredAuthData,
  setStoredAuthData, removeStoredAuthData,
} from './offline';

const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

export const auth0Lock = lock;
export const authLocalStore = {
  isAuthenticated, getStoredAuthData,
  setStoredAuthData, removeStoredAuthData,
};
