import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, routes } from 'routes';
import store from 'store';
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
                <PrivateRoutes
                  key={i}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ) : (
                <PublicRoutes
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
