/**
 * UserPostHeader component of the UserPost that displays the header menu and information.
 * @param {object} [user] - current user, if user has no post then display an h1 tag.
 * @param {string} [photoURL] - image path.
 * @param {string} [displayName] - name of the current user.
 * @param {string} [docID] - documentID of the selected post.
 *
 */
import { useState } from 'react';
import {
  Box,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Grid,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_POST } from 'store/slices/postsSlice';
import { FluidTypography, ProductPanel } from 'components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(2),
    display: 'flex',
    alignSelf: 'center',
  },
}));
const UserPostHeader = ({ user, photoURL, displayName, docID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editDialog, setEditDialog] = useState(false);
  const currentUser = useSelector((state) => state.auth.user);
  const handleDeletePost = () => {
    dispatch(DELETE_POST({ docID }));
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Grid container justify='space-between' direction='row'>
      <Box display='flex' alignItems='center' width='fit-content'>
        <Avatar className={classes.largeAvatar} src={photoURL} />
        <FluidTypography
          text={displayName}
          minSize='1rem'
          size='0.9rem'
          maxSize='1rem'
          fontWeight='500'
          variant='subtitle1'
        />
      </Box>
      <Box
        display='flex'
        width='fit-content'
        justifyContent='flex-end'
        alignItems='center'
      >
        <IconButton
          onClick={(event) => handleClick(event)}
          style={{ padding: 0, margin: 0 }}
        >
          <MoreHorizIcon />
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {currentUser.email === user.author || user.email ? (
          <div>
            <MenuItem onClick={() => setEditDialog(true)}>Edit</MenuItem>
            <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
          </div>
        ) : (
          <MenuItem
            onClick={() => {
              alert('NOT YET IMPLEMENTED');
            }}
          >
            Report
          </MenuItem>
        )}
      </Menu>
      <ProductPanel
        closeEdit={() => setEditDialog(false)}
        action='edit'
        openEdit={editDialog}
        user={user}
        documentID={docID}
      />
    </Grid>
  );
};

UserPostHeader.propTypes = {
  user: PropTypes.object.isRequired,
  photoURL: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  docID: PropTypes.string.isRequired,
};

export default UserPostHeader;
