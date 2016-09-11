import React from 'react';

import { Grid, Cell} from 'react-mdl';

import MoistureChart from 'src/components/moisture/ChartContainer';

const Dashboard = () => (
  <Grid className="demo-grid-ruler">
    <Cell col={3}>
      <MoistureChart hours={1} clientId="garden-aid-client-test-js" />
    </Cell>
  </Grid>
);

export default Dashboard;
