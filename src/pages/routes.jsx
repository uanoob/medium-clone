import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalFeed from './globalFeed';
import Article from './article';

export default () => (
  <Switch>
    <Route path="/" exact component={GlobalFeed} />
    <Route path="/articles/:slug" component={Article} />
  </Switch>
);
