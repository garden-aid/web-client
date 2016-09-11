import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';

import Logout from './Auth/Logout';
import Login from './Auth/Login';

const styles = {
  appBar: {
    position: 'fixed',
    // Needed to overlap the examples
    zIndex: 1100,
    top: 0,
  },
};

const NavBar = (props) => {
  const authButton = props.isAuthenticated
    ? (<Logout {...props} />)
    : (<Login {...props} />);
  return (
    <AppBar
      title="Garden Aid"
      iconElementRight={authButton}
      style={styles.appBar}
      showMenuIconButton={false}
    />
  );
};

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default NavBar;
