import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import MainLayout from '../layout/MainLayout';
import Overview from '../views/Overview';
import SupremeCourt from '../views/SupremeCourt';
import HighCourts from '../views/HighCourts';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout path="/" exact layout={MainLayout} component={Overview} />
      <RouteWithLayout path="/supreme-court" layout={MainLayout} component={SupremeCourt} />
      <RouteWithLayout path="/high-courts" layout={MainLayout} component={HighCourts} />
    </Switch>
  );
};

export default Routes;
