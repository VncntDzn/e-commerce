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
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RssFeedIcon from '@material-ui/icons/RssFeed';
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
          icon={<DashboardOutlinedIcon />}
        />

        <BottomNavigationAction
          label='Cart'
          value='/payment'
          icon={
            <Badge
              color='error'
              overlap='circle'
              badgeContent={orders?.length}
              max={10}
              style={{ paddingTop: '.5rem' }}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          }
        />
      </BottomNavigation>
    </Hidden>
  );
};
export default BottomNav;
