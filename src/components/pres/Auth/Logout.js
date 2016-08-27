
import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

const Logout = ({ onLogoutClick }) => (
  <Button onClick={onLogoutClick} className="btn btn-primary">
    Logout
  </Button>
);

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};

export default Logout;
