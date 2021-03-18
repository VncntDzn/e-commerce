import Navbar from 'layouts/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme/customTheme';
import { Signin } from 'pages/auth'
import { Grid, } from '@material-ui/core';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '90vh' }}>
        {/* <Signin /> */}
      </Grid>

    </ThemeProvider>
  );
}

export default App;
