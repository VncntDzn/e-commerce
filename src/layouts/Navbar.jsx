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
} from '@material-ui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
          <Hidden mdUp>
            <IconButton
              onClick={handleNavbar}
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <MenuRoundedIcon />
            </IconButton>
          </Hidden>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <Typography variant='h6'>E-comm</Typography>
            <Grid>
              <Button color='inherit'>Cart</Button>
              <Hidden xsDown>
                <Button color='inherit'>Link 1</Button>
                <Button color='inherit'>Link 2</Button>
              </Hidden>
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
