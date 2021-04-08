import { StrictMode, useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import routes from 'routes/routes';
import store from 'store';
import PrivateRoute from 'routes/PrivateRoutes';
import firebase from 'firebase/firebaseConfig'
import theme from 'theme/customTheme';

const App = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user;
        console.log(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              {routes.map((route, i) => (
                route.auth ? (
                  <PrivateRoute
                    key={i}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                ) : (
                  <Route
                    key={i}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                )
              ))}
            </Switch>
          </Router>

        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}

export default App;
