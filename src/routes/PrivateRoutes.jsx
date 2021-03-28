import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isLogin } from '../utils';
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    /* <Component {...props} />  */
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <div>You are not authenticated</div>
        )
      }
    />
  );
};

export default PrivateRoute;
