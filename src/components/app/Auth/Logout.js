
import React, { PropTypes } from 'react';

import { Button } from 'react-mdl';

const Logout = ({ onLogoutClick }) => (
  <Button label="Logout" primary onClick={onLogoutClick} />
);

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};

export default Logout;
