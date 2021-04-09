import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Item from './Pages/Item';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/item" component={Item} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
