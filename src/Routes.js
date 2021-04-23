import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Item from './Pages/Item';

// const Routes = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/stock/:ticker" component={Item} />
//       <Route exact path="/" component={Home} />
//     </Switch>
//   </BrowserRouter>
// );

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route exact path="/" component={Home} />
    <Route exact path="/stock/:ticker" component={Item} />
  </Router>
);

export default Routes;
