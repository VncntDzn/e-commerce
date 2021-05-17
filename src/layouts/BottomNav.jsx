import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  makeStyles,
  Badge,
} from '@material-ui/core';
import { useNotifications } from 'helpers';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
const BottomNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const { orders } = useNotifications();
  const favorites = [],
    userOrders = [],
    historyOrders = [];

  orders.filter(({ data }) => {
    if (data.type === 'favorite') {
      favorites.push(data);
    } else if (data.type === 'order') {
      userOrders.push(data);
    } else {
      historyOrders.push(data);
    }

    return null;
  });

  return (
    <Hidden lgUp>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label='Feed' value='/' icon={<RssFeedIcon />} />
        <BottomNavigationAction
          label='Dashboard'
          value='/all-posts'
          icon={<DashboardIcon />}
        />
        <BottomNavigationAction
          label='Favorites'
          value='/favorites'
          icon={
            <Badge
              color='error'
              overlap='circle'
              badgeContent={favorites?.length}
              max={10}
              style={{ paddingTop: '.5rem' }}
            >
              <FavoriteIcon />
            </Badge>
          }
        />
        <BottomNavigationAction
          label='Cart'
          value='/checkout'
          icon={
            <Badge
              color='error'
              overlap='circle'
              badgeContent={userOrders?.length}
              max={10}
              style={{ paddingTop: '.5rem' }}
            >
              <ShoppingCartIcon />
            </Badge>
          }
        />
      </BottomNavigation>
    </Hidden>
  );
};
export default BottomNav;
