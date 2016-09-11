import React from 'react';

import MoistureChart from 'src/components/moisture/ChartContainer';

const Dashboard = () => (
  <div className="row">
    <div className="col-md-12">
      <MoistureChart hours={1} clientId="garden-aid-client-test-js" />
    </div>
  </div>
);

export default Dashboard;
