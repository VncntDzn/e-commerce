import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import theme from 'theme/customTheme';
import { useHistory } from 'react-router-dom';

const BottomNav = (props) => {
  const history = useHistory();
  const useStyles = makeStyles({
    root: {
      width: '100vw',
      position: 'fixed',
      bottom: 0,
      backgroundColor: theme.palette.secondary.main,
    },
    '&:selected': {
      color: 'blue',
    },
  });
  const classes = useStyles();
  const [value, setValue] = useState('/');

  const handleChange = (event, newValue) => {
    /* TODO: FIX THE BUG */
    history.push(newValue);
    setValue(newValue);
  };

  return (
    <Hidden only={['lg', 'xl']}>
      <BottomNavigation
        value={value}
        onChange={(data, value) => console.log(value)}
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
