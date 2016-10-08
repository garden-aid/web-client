
export const ID_TOKEN = 'idToken';
export const PROFILE = 'profile';

export function setStoredAuthData(profile, idToken) {
  localStorage.setItem(ID_TOKEN, idToken);
  localStorage.setItem(PROFILE, JSON.stringify(profile));
}

export function removeStoredAuthData() {
  localStorage.removeItem(ID_TOKEN);
  localStorage.removeItem(PROFILE);
}

export function isAuthenticated() {
  try {
    const idToken = localStorage.getItem(ID_TOKEN);
    return !!idToken;
  } catch (err) {
    removeStoredAuthData();
    return false;
  }
}

export function getStoredAuthData() {
  try {
    const idToken = localStorage.getItem(ID_TOKEN);
    const profile = JSON.parse(localStorage.getItem(PROFILE));

    // TODO: Check if JWT Expired

    return { idToken, profile };
  } catch (err) {
    removeStoredAuthData();

    return {};
  }
}
