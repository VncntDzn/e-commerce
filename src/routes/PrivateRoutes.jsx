import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'store/slices/authSlice';
import firebase from 'firebase/firebaseConfig';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.uid);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user;
        console.log(uid);
        dispatch(getCurrentUser(uid));
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
      render={(props) =>
        uid ? <Component {...props} /> : <div>You are not authenticated</div>
      }
    />
  );
};

export default PrivateRoute;
