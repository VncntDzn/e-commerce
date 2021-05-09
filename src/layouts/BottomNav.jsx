import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  makeStyles,
} from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import customTheme from 'theme/customTheme';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    backgroundColor: customTheme.palette.secondary.main,
  },
  '&:selected': {
    color: 'blue',
  },
});
const BottomNav = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  return (
    <Hidden only={['lg', 'xl']}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label='Dashboard'
          value='/all-posts'
          icon={<DashboardOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Account'
          value='/auth/signin'
          icon={<AccountCircleOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Favorite'
          value='/payment'
          icon={<FavoriteBorderOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Search'
          value='/'
          icon={<SearchOutlinedIcon />}
        />
      </BottomNavigation>
    </Hidden>
  );
};

BottomNav.propTypes = {};

export default BottomNav;
