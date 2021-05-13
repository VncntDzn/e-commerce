import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Grid,
  TextField,
  Button,
  Box,
  makeStyles,
  Menu,
  MenuItem,
  Badge,
} from '@material-ui/core';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER } from 'store/slices/authSlice';
import { useNotifications } from 'helpers';
import customTheme from 'theme/customTheme';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

import { useFetchPosts } from 'helpers';
const useStyles = makeStyles((theme) => ({
  boxContainer: {
    [theme.breakpoints.up('lg')]: {
      margin: '0 6rem',
    },
  },
  button: {
    '&:active': {
      borderBottom: '3px solid red',
    },
    '&:focus': {
      borderBottom: `3px solid ${customTheme.palette.secondary.main}`,
    },
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { orders } = useNotifications();
  const uid = useSelector((state) => state.auth.uid);
  const user = useSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = useSelector((state) => state.auth.user);
  const { allPosts } = useFetchPosts({ compareTo: null, compareFrom: null });
  const allPostUser = allPosts.filter(
    ({ data }) => data.author === currentUser.email
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    dispatch(LOGOUT_USER());
    history.push('/');
  };
  return (
    <Router>
      <AppBar position='fixed'>
        <Toolbar>
          <Box
            className={classes.boxContainer}
            width='100vw'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Grid
              container
              item
              direction='row'
              justify='flex-start'
              alignContent='flex-start'
              xs={6}
              lg={7}
              md={7}
            >
              <Typography
                variant='h6'
                onClick={() => history.push('/')}
                style={{ cursor: 'pointer' }}
              >
                E-comm
              </Typography>
              <Hidden mdDown>
                <Grid
                  container
                  md={5}
                  lg={7}
                  item
                  direction='row'
                  justify='space-around'
                  alignItems='center'
                  style={{ marginLeft: '2rem' }}
                >
                  <Button
                    className={classes.button}
                    onClick={() => history.push('/all-posts')}
                  >
                    <div style={{ display: 'flex', cursor: 'pointer' }}>
                      <DashboardOutlinedIcon />
                      <Typography
                        variant='subtitle1'
                        className={classes.button}
                      >
                        All
                      </Typography>
                    </div>
                  </Button>

                  <Button href='#' className={classes.button}>
                    <Typography variant='subtitle1'>Today's Deal</Typography>
                  </Button>
                  <Button className={classes.button}>
                    <Typography variant='subtitle1'>Gift Cards</Typography>
                  </Button>
                </Grid>
              </Hidden>
            </Grid>

            <Grid
              container
              xs={6}
              lg={5}
              md={5}
              item
              direction='row'
              alignContent='center'
              justify='flex-end'
              alignItems='flex-end'
            >
              <Hidden smDown>
                <Grid item style={{ marginBottom: '0.3rem' }}>
                  <SearchOutlinedIcon />
                </Grid>
                <Grid item style={{ marginBottom: '0.5rem' }}>
                  <TextField placeholder='Search' />
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <IconButton
                  color='inherit'
                  aria-label='cart'
                  onClick={() => history.push('/checkout')}
                >
                  <Badge
                    color='error'
                    overlap='circle'
                    badgeContent={orders?.length}
                    max={10}
                    style={{ paddingTop: '.5rem' }}
                  >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  color='inherit'
                  aria-label='cart'
                  onClick={() => history.push('/checkout')}
                >
                  <SearchIcon />
                </IconButton>
              </Hidden>
              <IconButton
                color='inherit'
                aria-label='auth'
                onClick={handleClick}
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {!uid ? (
          <Box>
            <MenuItem onClick={() => history.push('/auth/signin')}>
              Signin
            </MenuItem>
            <MenuItem onClick={() => history.push('/auth/signup')}>
              Signup
            </MenuItem>
            <MenuItem onClick={() => history.push('/credits')}>
              Credits
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem
              onClick={() =>
                history.push(
                  `/profile/${allPostUser[0]?.data.author || user.email}`
                )
              }
            >
              My account
            </MenuItem>
            <MenuItem onClick={logout}>Signout</MenuItem>
            <MenuItem onClick={() => history.push('/credits')}>
              Credits
            </MenuItem>
          </Box>
        )}
      </Menu>
    </Router>
  );
};

Navbar.propTypes = {};

export default Navbar;
