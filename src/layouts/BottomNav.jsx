import { useState } from 'react';
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

const BottomNav = (props) => {
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
  const classes = useStyles();
  const [value, setValue] = useState('/');

  const handleChange = (event, newValue) => {
    /*   TODO: FIX THE BUG */

    setValue(newValue);
  };

  return (
    <Hidden only={['lg', 'xl']}>
      <BottomNavigation
        value={value}
        onChange={(data, value) => handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label='Dashboard'
          value='/'
          icon={<DashboardOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Account'
          value='/auth/signin'
          icon={<AccountCircleOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Favorite'
          value='/favorite'
          icon={<FavoriteBorderOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Search'
          value='/search'
          icon={<SearchOutlinedIcon />}
        />
      </BottomNavigation>
    </Hidden>
  );
};

BottomNav.propTypes = {};

export default BottomNav;
