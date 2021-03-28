
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme/customTheme';
import { Provider } from 'react-redux';
import { StrictMode } from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import routes from 'routes/routes';
import store from 'store';
import PrivateRoute from 'routes/PrivateRoutes';

const App = () => {

  return (
    <StrictMode>

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
    </StrictMode>
  );
}

export default App;
