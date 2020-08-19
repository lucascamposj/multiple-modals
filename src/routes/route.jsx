import React from 'react';
import {
  Route as ReactDOMRoute,
} from 'react-router-dom';

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return <Component />
      }}
    />
  );
};

export default Route;
