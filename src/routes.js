import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App, Home, NotFound } from './components/pres';

export default (store) => ( // eslint-disable-line no-unused-vars
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
