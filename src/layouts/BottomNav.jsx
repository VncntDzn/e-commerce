import { useState } from 'react';
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

const BottomNav = (props) => {
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
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Hidden only={['lg', 'xl']}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label='Dashboard'
          value='dashboard'
          icon={<DashboardOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Account'
          value='account'
          icon={<AccountCircleOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Favorite'
          value='favorite'
          icon={<FavoriteBorderOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Search'
          value='search'
          icon={<SearchOutlinedIcon />}
        />
      </BottomNavigation>
    </Hidden>
  );
};

BottomNav.propTypes = {};

export default BottomNav;
