/**
 * User Details is intended for user information.
 * Also it is the component where you can update the user information.
 */
import { useState } from 'react';
import {
  Button,
  makeStyles,
  Avatar,
  Box,
  Dialog,
  DialogActions,
  TextField,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from 'store/slices/userSlice';
import { FluidTypography } from 'components';
import { firebaseStorage } from 'firebase/firebaseConfig';
import AbstractArt from './assets/abstractart.jpg';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: '35vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(-7),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(-12),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(10),
    },
  },
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginTop: theme.spacing(-4),
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(-7),
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
  imageContainer: {
    objectFit: 'cover',
    height: '25vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '20vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '30vh',
    },
  },
}));
const UserDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [link, setLink] = useState(null);
  const [disable, setDisable] = useState(true);
  const handleClose = () => {
    setOpen(!open);
  };
  const handleUpload = async (files) => {
    const storageRef = firebaseStorage.ref(`update-user/${user.email}`);
    let picture = files.target.files[0];

    try {
      let fileRef = storageRef.child(picture.name);
      await fileRef.put(picture);
      setLink(await fileRef.getDownloadURL());
      setDisable(false);
    } catch (e) {
      console.log(e);
    }
  };
  const updateProfileDetails = () => {
    dispatch(updateProfile({ name, link }));
  };

  return (
    <Box className={classes.rootContainer}>
      <img
        className={classes.imageContainer}
        src={AbstractArt}
        alt='abstract'
      />
      <Avatar className={classes.largeAvatar} src={user.photoURL} />

      <FluidTypography text={user.displayName} />
      <Button
        onClick={() => setOpen(!open)}
        variant='outlined'
        color='secondary'
      >
        Edit Profile
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby='simple-dialog-title'
        open={open}
        fullWidth
      >
        <Box p={2}>
          <TextField
            style={{ margin: 5 }}
            fullWidth
            variant='outlined'
            color='secondary'
            label='New Full Name'
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ margin: 5 }}
            fullWidth
            variant='outlined'
            color='secondary'
            type='file'
            inputProps={{ accept: 'image/*' }}
            onChange={handleUpload}
          />
        </Box>
        <DialogActions>
          <Button
            color='secondary'
            variant='outlined'
            onClick={updateProfileDetails}
            disable={disable}
          >
            Update
          </Button>
          <Button variant='outlined' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserDetails;
