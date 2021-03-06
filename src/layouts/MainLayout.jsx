import { Navbar, BottomNav } from 'layouts';
import { Box, makeStyles } from '@material-ui/core';
import { Footer } from 'pages';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    margin: '0 1rem',
    marginTop: '5rem',
    marginBottom: '3rem',
    [theme.breakpoints.up('lg')]: {
      margin: '0 6rem',
      marginTop: '5rem',
    },
  },
}));
const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.boxContainer}>{children}</Box>
      <Footer />
      <BottomNav />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
