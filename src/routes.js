import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App, NotFound } from './components/pres';
import { Home } from './components/containers';

export default (store) => ( // eslint-disable-line no-unused-vars
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
