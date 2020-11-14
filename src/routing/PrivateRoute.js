import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = props => {
  const { component: Component, isLoggedIn, ...rest } = props;
  return (
    <Route {...rest} render={props => {
      return isLoggedIn ? (
        <Component {...rest} />
      )
        : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }} />
  )
}

export default PrivateRoute
