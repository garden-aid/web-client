
import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import config from 'app-config';

import rdash from 'static/rdash/css/rdash.css';

import SideBar from './SideBar.js';

import NavBar from '../../containers/App/NavBar';

const App = ({ children }) => (
  <div>
    <Helmet {...config.app.head} />
    <div id="page-wrapper" className="open">
      <SideBar />
      <div id="content-wrapper">
        <div className="page-content">
          <NavBar />
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

App.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
