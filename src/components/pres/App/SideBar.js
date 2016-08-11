
import React from 'react';


export default function SideBar() {
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar">
        <li className="sidebar-main">
          <a href="/">
            Garden Aid
          </a>
        </li>
        <li className="sidebar-title"><span>NAVIGATION</span></li>
        <li className="sidebar-list">
          <a href="/">Dashboard <span className="menu-icon fa fa-tachometer"></span></a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <div className="col-xs-4">
          <a href="https://github.com/johncmckim/garden-aid" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
