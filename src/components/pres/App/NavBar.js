import React, { PropTypes } from 'react';
import Logout from '../Auth/Logout';
import Login from '../Auth/Login';

const NavBar = (props) => (
  <div className="header row">
    <div className="col-xs-9">
      <div className="meta">
        <div className="page">
          Dashboard
        </div>
      </div>
    </div>
    <div className="col-xs-3">
      <div className="meta">
        <div className="page">
          {props.isAuthenticated
            ? <Logout {...props} />
            : <Login {...props} />
          }
          {props.errorMessage && <p style={{ color: 'red' }}>{props.errorMessage}</p>}
        </div>
      </div>

    </div>
  </div>
);

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default NavBar;
