function authSelector(item) {
  return (state) => {
    if (!state.auth) return null;
    return state.auth[item];
  };
}

export const getError = authSelector('error');
export const getIdToken = authSelector('idToken');
export const getIsLoggingIn = authSelector('isLoggingIn');
export const getProfile = authSelector('profile');
