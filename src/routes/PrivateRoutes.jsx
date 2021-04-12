import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from 'store/slices/authSlice';
import PropTypes from 'prop-types';
import firebase from 'firebase/firebaseConfig';
import RedirectRoute from './RedirectRoute';

/** A custom wrapper for Route.
 * @param {Component} component - the component that will be rendered.\
 * @param {object} rest - the props passed from the root file.
 * @param {object} props - the props of Route component.
 */

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.auth.uid);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        dispatch(getCurrentUser(user));
      } else {
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page

    <Route
      {...rest}
      render={(props) => (uid ? <Component {...props} /> : <RedirectRoute />)}
    />
  );
};

PrivateRoutes.propTypes = {
  component: PropTypes.elementType.isRequired,
  rest: PropTypes.object,
};
export default PrivateRoutes;
