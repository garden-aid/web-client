
import React, { Component, PropTypes } from 'react';

import Helmet from 'react-helmet';

import config from 'app-config';

import rdash from 'static/rdash/css/rdash.css';

import SideBar from './SideBar.js';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <Helmet {...config.app.head}/>
        <div id="page-wrapper" className="open">
          <SideBar />
          <div id="content-wrapper">
            <div className="page-content">
              <div className="row header">
                <div className="col-xs-12">
                  <div className="meta">
                    <div className="page">
                      Dashboard
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
