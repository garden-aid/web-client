import React, { PropTypes } from 'react';

import { Header, Navigation } from 'react-mdl';

import Logout from './Auth/Logout';
import Login from './Auth/Login';

const NavBar = (props) => {
  const authButton = props.isAuthenticated
    ? (<Logout {...props} />)
    : (<Login {...props} />);
  return (
    <Header title="Garden Aid">
      <Navigation>
        {authButton}
      </Navigation>
    </Header>
  );
};

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default NavBar;
