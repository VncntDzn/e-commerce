import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import store from 'store';
import PrivateRoute from 'routes/PrivateRoutes';
import routes from 'routes/routes';
import theme from 'theme/customTheme';

const App = () => {

  return (
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

  );
}

export default App;
