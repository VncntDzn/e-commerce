import { Navbar, BottomNav } from 'layouts';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme/customTheme';
import { Box } from '@material-ui/core';
import { CarouselProvider, Recommendations, Categories, ShippingBanner, Promotions, MenWomen, Community, Footer } from 'pages'

import { makeStyles } from '@material-ui/core/styles';
const App = () => {
  const useStyles = makeStyles((theme) => ({
    boxContainer: {
      margin: '0 1rem',
      [theme.breakpoints.up('lg')]: {
        margin: '0 6rem',
      },
    },
  }));

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box className={classes.boxContainer} style={{ marginTop: '5rem' }}>
        <CarouselProvider />
        <Recommendations />
        <Categories />
        <Promotions />
        <ShippingBanner />
        <MenWomen />
        <Community />
        <Footer />
        {/* TODO: USE MATH RANDOM FOR THE COUNT OF REVIEWS */}
      </Box>

      <BottomNav />
    </ThemeProvider>
  );
}

export default App;
