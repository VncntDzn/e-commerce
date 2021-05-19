import { Box, Menu, MenuItem } from '@material-ui/core';
import { LOGOUT_USER } from 'store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useFetchPosts } from 'helpers';

const AccountMenu = ({ anchorEl, onClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const { allPosts } = useFetchPosts({ compareTo: null, compareFrom: null });
  const uid = useSelector((state) => state.auth.uid);
  const user = useSelector((state) => state.auth.user);

  const allPostUser = allPosts.filter(
    ({ data }) => data.author === currentUser.email
  );
  const logout = () => {
    dispatch(LOGOUT_USER());
    history.push('/');
  };
  return (
    <Router>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => onClose()}
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
                  `/profile/${allPostUser[0]?.data?.author || user.email}`
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

AccountMenu.propTypes = {};

export default AccountMenu;
