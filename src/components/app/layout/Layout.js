
import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { Link } from 'react-router';

import config from 'src/config';

import { Content, IconButton, Drawer, Header, Icon, Layout, Menu, MenuItem, Navigation } from 'react-mdl';

import './Layout.scss';

const getAuthNav = (props) => (
  <Navigation>
    <Link to="/">Dashboard</Link>
    <Link to="/devices">Devices</Link>
    <Link to="/rules">Rules</Link>
  </Navigation>
);

const getUnauthNav = () => (
  <Navigation>
    <Link to="/login">Login</Link>
  </Navigation>
);

const getUserAvatar = (profile) => (
  <img className="user-info-avatar" src={profile.picture} role="presentation" />
);

const avatarIcon = (
  <Icon name="account_circle" />
);

const getDrawer = ({ profile, onLogoutClick }) => (
  <Drawer>
    <header className="user-info">
      {profile.picture ? getUserAvatar(profile) : avatarIcon}
      <div className="user-info-dropdown">
        <div className="user-info-bar">
          <div className="user-info-name">{profile.name}</div>
          <IconButton id="accbtn" name="arrow_drop_down" />
        </div>
        <Menu target="accbtn" align="right">
          <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
    <Navigation>
      <Link to="/devices">Devices</Link>
    </Navigation>
  </Drawer>
);

const AppLayout = (props) => {
  const { isAuthenticated, children } = props;

  const nav = isAuthenticated ? getAuthNav(props) : getUnauthNav();
  const drawer = isAuthenticated ? getDrawer(props) : null;
  return (
    <Layout fixedHeader fixedDrawer={isAuthenticated}>
      <Helmet {...config.app.head} />
      <Header title="Garden Aid">
        {nav}
      </Header>
      {drawer}
      <Content>
        {children}
      </Content>
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    picture: PropTypes.string,
  }).isRequired,
};

export default AppLayout;
