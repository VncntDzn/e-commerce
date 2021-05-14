/**
 * Navbar - parent component of the LinksNavigation and IconsNavigation.
 */
import { AppBar, Toolbar, Box, makeStyles } from '@material-ui/core';
import LinksNavigation from './LinksNavigation';
import IconsNavigation from './IconsNavigation';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    [theme.breakpoints.up('lg')]: {
      margin: '0 6rem',
    },
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Box
          className={classes.boxContainer}
          width='100vw'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <LinksNavigation />
          <IconsNavigation />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
