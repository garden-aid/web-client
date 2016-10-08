import React from 'react';

import './widget.frame.scss';

const WidgetFrame = ({ title, editable, children, onRemove }) => {
  return (
    <div className="dashboard-widget mdl-color--white mdl-shadow--2dp">
      <div className="dashboard-widget_info">
        <h2 className="dashboard-widget__info-title">{title}</h2>
      </div>
      <div className="dashboard-widget_content">{children}</div>
    </div>
  );
};

export default WidgetFrame;
