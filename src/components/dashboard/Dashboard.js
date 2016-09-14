import React from 'react';

import Dashboard from 'react-dazzle';

import 'react-dazzle/lib/style/style.css';

import WidgetFrame from './WidgetFrame';
import MoistureChart from 'src/components/moisture/ChartContainer';

const DashboardPage = React.createClass({
  getInitialState() {
    return {
      widgets: {
        MoistureChart: {
          type: MoistureChart,
          title: 'Moisture Chart',
          props: {
            clientId: 'garden-aid-client-test-js',
            hours: 1,
          },
        },
      },
      layout: {
        rows: [{
          columns: [{
            className: 'mdl-cell mdl-cell--4-col',
            widgets: [{ key: 'MoistureChart' }],
          }],
        }],
      },
    };
  },

  render() {
    return (
      <Dashboard
        rowClass="mdl-grid"
        widgets={this.state.widgets}
        layout={this.state.layout}
        frameComponent={WidgetFrame}
      />
    );
  },
});

export default DashboardPage;
