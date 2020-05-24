import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Listing from './pages/Listing';
import Detail from './pages/Detail';

export function Routes () {
  return (
    <Switch>
      <Route path="/:slug" component={Detail} />
      <Route path="/" component={Listing} />
    </Switch>
  );
}