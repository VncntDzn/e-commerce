import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  makeStyles,
  Badge,
} from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import customTheme from 'theme/customTheme';
import { firestore } from 'firebase/firebaseConfig';
import { useSelector } from 'react-redux';

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
  const uid = useSelector((state) => state.auth.uid);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // unsubscribe to onSnapshot
    return firestore
      .collection('orders')
      .orderBy('timestamp', 'desc')
      .where('uid', '==', uid)
      .onSnapshot((snapshot) => {
        let ordersArray = [];
        snapshot.forEach((doc) =>
          ordersArray.push({ docID: doc.id, data: doc.data() })
        );
        setOrders(ordersArray);
      });
  }, [uid]);
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

BottomNav.propTypes = {};

export default BottomNav;
