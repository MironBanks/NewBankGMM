import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Send from './Send';
import Profile from './Profile';
import Scan from './Scan';
import Request from './Request';
import Payments from './Payments';
import Cards from './Cards';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/request" component={Request} />
        <Route path="/scan" component={Scan} />
        <Route path="/send" component={Send} />
        <Route path="/payments" component={Payments} />
        <Route path="/cards" component={Cards} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
