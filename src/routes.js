import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { AppLayout, Callback, Login, PanelLayout, NotFound, UnderConstruction } from './components/app';
import Dashboard from './components/dashboard/Dashboard';

function requireAuth(store) {
  return (nextState, replace) => {
    const state = store.getState();

    if (!state.auth || !state.auth.isAuthenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };
}

export default (store) => ( // eslint-disable-line no-unused-vars
  <Route component={AppLayout}>
    <Route path="/" component={PanelLayout} onEnter={requireAuth(store)}>
      <IndexRoute component={Dashboard} />
      <Route path="/devices" component={UnderConstruction} />
      <Route path="/rules" component={UnderConstruction} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/callback" component={Callback} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
