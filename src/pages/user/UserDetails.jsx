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
import AbstractArt from './assets/abstractart.jpg';
import { FluidTypography } from 'components';

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
  const [details, setDetails] = useState({ displayName: '', photoURL: '' });
  const handleClose = () => {
    setOpen(!open);
  };
  const updateProfileDetails = () => {
    dispatch(updateProfile(details));
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
            onChange={(e) =>
              setDetails({ ...details, displayName: e.target.value })
            }
          />
          <TextField
            style={{ margin: 5 }}
            fullWidth
            variant='outlined'
            color='secondary'
            type='file'
            inputProps={{ accept: 'image/*' }}
            onChange={(e) =>
              setDetails({ ...details, photoURL: e.target.files[0].name })
            }
          />
        </Box>
        <DialogActions>
          <Button
            color='secondary'
            variant='outlined'
            onClick={updateProfileDetails}
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
