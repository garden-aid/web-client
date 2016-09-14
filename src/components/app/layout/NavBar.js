import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import { Header, Navigation } from 'react-mdl';

import ProfileButton from '../auth/ProfileButton';

const getAuthNav = (props) => (
  <Navigation>
    <Link to="/">Dashboard</Link>
    <Link to="/devices">Devices</Link>
    <Link to="/rules">Rules</Link>
    <ProfileButton {...props} />
  </Navigation>
);

const getUnauthNav = () => (
  <Navigation>
    <Link to="/login">Login</Link>
  </Navigation>
);

const NavBar = (props) => {
  const nav = props.isAuthenticated ? getAuthNav(props) : getUnauthNav();

  return (
    <Header title="Garden Aid">
      {nav}
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
