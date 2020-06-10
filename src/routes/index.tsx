import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Repositories from '../pages/Repositories';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/repositories" exact component={Repositories} />
    <Route path="/repositories/:repository+" exact component={Repository} />
  </Switch>
);

export default Routes;
