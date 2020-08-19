import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './route';

import PaginaPrincipal from '../pages/PaginaPrincipal';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={PaginaPrincipal} />
  </Switch>
)

export default Routes;