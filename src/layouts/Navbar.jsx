import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
} from '@material-ui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

const Navbar = (props) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Hidden mdUp>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuOpenRoundedIcon />
          </IconButton>
        </Hidden>
        <Typography variant='h6'>News</Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {};

export default Navbar;
