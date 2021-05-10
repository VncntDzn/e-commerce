import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  makeStyles,
} from '@material-ui/core';
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
const BottomNav = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

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
        <BottomNavigationAction
          label='Dashboard'
          value='/all-posts'
          icon={<DashboardOutlinedIcon />}
        />
        <BottomNavigationAction
          label='Feed'
          value='/search'
          icon={<RssFeedIcon />}
        />
        <BottomNavigationAction
          label='Cart'
          value='/payment'
          icon={<ShoppingCartOutlinedIcon />}
        />
      </BottomNavigation>
    </Hidden>
  );
};

BottomNav.propTypes = {};

export default BottomNav;
