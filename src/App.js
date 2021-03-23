import Navbar from 'layouts/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme/customTheme';
import { Signin } from 'pages/auth'
import { Grid, Box } from '@material-ui/core';
import { CarouselProvider, Recommendations, Categories, ShippingBanner } from 'pages'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box style={{ marginTop: '5rem' }}>
        <CarouselProvider />
        <Recommendations />
        {/*  <Categories /> */}
        <ShippingBanner />
      </Box>

    </ThemeProvider>
  );
}

export default App;
