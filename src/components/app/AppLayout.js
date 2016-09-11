
import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import config from 'src/config';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './NavBarContainer';

const AppLayout = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <Helmet {...config.app.head} />
      <div>
        <NavBar />
        <div>
          {children}
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

AppLayout.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default AppLayout;
