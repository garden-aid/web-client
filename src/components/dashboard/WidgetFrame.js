import React from 'react';

const WidgetFrame = ({ title, editable, children, onRemove }) => {
  return (
    <div className="dashboard-widget mdl-color--white mdl-shadow--2dp">
      <div>{children}</div>
      <div className="dashboard-widget_info">
        <span className="dashboard-widget__info-text">{title}</span>
      </div>
    </div>
  );
};

export default WidgetFrame;
