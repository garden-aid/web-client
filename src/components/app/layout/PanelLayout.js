
import React, { PropTypes } from 'react';

import SideBar from './SideBar.js';

const PanelLayout = ({ children }) => (
  <div>
    <SideBar />
    <div>
      {children}
    </div>
  </div>
);

PanelLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

PanelLayout.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default PanelLayout;
