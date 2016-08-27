import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const Login = ({ onLoginClick }) => (
  <Button onClick={onLoginClick} className="btn btn-primary">
    Login
  </Button>
);

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default Login;
