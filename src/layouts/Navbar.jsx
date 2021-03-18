import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Navbar = (props) => {
  const [toggleNavbar, setNavbar] = useState(false);
  const drawerRef = useRef(null);
  const handleNavbar = () => {
    setNavbar(!toggleNavbar);
  };
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              onClick={handleNavbar}
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
                >
                  <Typography variant='subtitle1'>All</Typography>
                  <Typography variant='subtitle1'>Today's Deal</Typography>
                  <Typography variant='subtitle1'>Gift Cards</Typography>
                  <Typography variant='subtitle1'>
                    Registry & Gifting
                  </Typography>
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
      <Drawer ref={drawerRef} anchor='left' open={toggleNavbar}>
        <IconButton
          onClick={handleNavbar}
          edge='start'
          color='inherit'
          aria-label='menu'
        >
          <MenuOpenRoundedIcon />
        </IconButton>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <h1>Accounts here</h1>
      </Drawer>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
