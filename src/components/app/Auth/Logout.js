
import React, { PropTypes } from 'react';

import { FlatButton } from 'material-ui';

const Logout = ({ onLogoutClick }) => (
  <FlatButton label="Logout" primary={true} onClick={onLogoutClick} />
);

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};

export default Logout;
