import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Grid,
  TextField,
  Link,
  Button,
  Drawer,
  Box,
} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import CartMenu from './menu/CartMenu';
import customTheme from 'theme/customTheme';

const Navbar = (props) => {
  const useStyles = makeStyles({
    link: {
      color: 'black',
    },
    button: {
      '&:active': {
        borderBottom: '3px solid red',
      },
      '&:focus': {
        borderBottom: `3px solid ${customTheme.palette.secondary.main}`,
      },
    },
  });
  const classes = useStyles();
  const [showDrawer, setDrawerMenu] = useState(false);
  const openDrawer = () => {
    setDrawerMenu(!showDrawer);
  };
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              onClick={openDrawer}
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <MenuRoundedIcon />
            </IconButton>
          </Hidden>

          <Grid container direction='row' alignItems='center'>
            <Grid
              container
              item={true}
              alignContent='center'
              alignItems='center'
              lg={1}
              xs={4}
            >
              <Typography variant='h6'>E-comm</Typography>
            </Grid>
            <Grid
              container
              item={true}
              direction='row'
              justify='space-between'
              alignContent='flex-end'
              alignItems='center'
              lg={11}
              xs={8}
            >
              <Hidden mdDown>
                <Grid
                  container
                  lg={5}
                  item={true}
                  direction='row'
                  justify='space-around'
                  alignItems='center'
                >
                  <Button className={classes.button}>
                    <Menu
                      className={classes.button}
                      menuButton={
                        <div style={{ display: 'flex', cursor: 'pointer' }}>
                          <DashboardOutlinedIcon />
                          <Typography
                            variant='subtitle1'
                            className={classes.button}
                          >
                            All
                          </Typography>
                        </div>
                      }
                    >
                      <MenuItem>
                        <CartMenu />
                      </MenuItem>
                    </Menu>
                  </Button>

                  <Link href='#' className={classes.link}>
                    <Typography variant='subtitle1'>Today's Deal</Typography>
                  </Link>
                  <Link className={classes.link}>
                    <Typography variant='subtitle1'>Gift Cards</Typography>
                  </Link>
                  <Link className={classes.link}>
                    <Typography variant='subtitle1'>
                      Registry & Gifting
                    </Typography>
                  </Link>
                </Grid>
              </Hidden>
              <Grid
                container
                lg={4}
                md={12}
                item={true}
                direction='row'
                alignContent='center'
                justify='flex-end'
                alignItems='flex-end'
              >
                <Hidden xsDown>
                  <Hidden smDown>
                    <Grid item style={{ marginBottom: '0.3rem' }}>
                      <SearchOutlinedIcon />
                    </Grid>
                    <Grid item style={{ marginBottom: '0.5rem' }}>
                      <TextField placeholder='Search' />
                    </Grid>
                  </Hidden>
                  <IconButton color='inherit' aria-label='menu'>
                    <AccountCircleOutlinedIcon />
                  </IconButton>

                  <IconButton color='inherit' aria-label='menu'>
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                </Hidden>
                <IconButton color='inherit' aria-label='menu'>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={showDrawer} onClose={openDrawer}>
        <h1>Hi</h1>
      </Drawer>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
