import { useState } from 'react'
import { ThemeProvider, CssBaseline, Dialog, DialogTitle, DialogContent, DialogActions, Box, Button, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, routes } from 'routes';
import { FluidTypography } from 'components'
import theme from 'theme/customTheme';

const App = () => {
  const [open, setOpen] = useState(true)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dialog onClose={() => setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Notice!</DialogTitle>
        <DialogContent>
          <FluidTypography text="Please note that E-comm is still under development and you might encounter some bugs. Please refresh only if you face any bugs. Thank you!" />
          <Typography color="secondary">Last update May 19, 2021</Typography>
        </DialogContent>
        <DialogActions>
          <Box display="flex" justifyContent="flex-end" >
            <Button color="secondary" variant="outlined" onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </DialogActions>
      </Dialog>
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
  );
}

export default App;
