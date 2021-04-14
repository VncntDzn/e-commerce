import { useState } from 'react';
import {
  Button,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Box,
  Dialog,
  DialogActions,
  TextField,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from 'store/slices/userSlice';

const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    [theme.breakpoints.up('lg')]: {
      width: '35vw',
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
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
    <Box display='flex' flexDirection='row'>
      <Grid
        container
        item
        xs={4}
        lg={4}
        xl={7}
        alignItems='center'
        justify='center'
      >
        <Avatar className={classes.large} src={user.photoURL} />
      </Grid>
      <Grid
        container
        item
        xs={8}
        sm={6}
        display='flex'
        justify='flex-start'
        direction='column'
      >
        <Typography>{user.displayName}</Typography>
        <Box>
          <Button
            className={classes.buttonStyle}
            onClick={() => setOpen(!open)}
            variant='outlined'
          >
            EDIT PROFILE
          </Button>
        </Box>
      </Grid>

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
