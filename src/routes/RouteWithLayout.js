import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, path, ...rest } = props;

  return (
    <Route
      path={path}
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
