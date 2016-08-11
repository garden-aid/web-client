import React from 'react';

import Helmet from 'react-helmet';

import { DayContainer } from '../../containers';

export default function Home() {
  return (
    <div className="row">
      <Helmet title="Home" />
      <div className="col-md-6">
        <DayContainer />
      </div>
    </div>
  );
}
