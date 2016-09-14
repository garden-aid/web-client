
import React, { PropTypes } from 'react';

import { Icon, Menu, MenuItem } from 'react-mdl';

import './ProfileButton.scss';

const profileButtonId = 'profile-button';

const styles = {
  container: {
    position: 'relative',
  },
};

const getUserAvatar = (profile) => (
  <img className="avatar-img" src={profile.picture} role="presentation" />
);

const avatarIcon = (
  <Icon name="account_circle" />
);

const ProfileButton = ({ onLogoutClick, profile }) => (
  <div style={styles.container}>
    <span className="profile-button" id={profileButtonId}>
      {profile.picture ? getUserAvatar(profile) : avatarIcon}
      <span className="profile-name">{profile.name}</span>
    </span>
    <Menu target={profileButtonId} align="right">
      <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
    </Menu>
  </div>
);

ProfileButton.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    picture: PropTypes.string,
  }).isRequired,
};

export default ProfileButton;
