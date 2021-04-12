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
  Card,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    [theme.breakpoints.up('lg')]: {
      width: '35vw',
    },
  },
}));
const UserDetails = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
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
        <Avatar>V</Avatar>
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
          />
          <TextField
            style={{ margin: 5 }}
            fullWidth
            variant='outlined'
            color='secondary'
            type='file'
            inputProps={{ accept: 'image/*' }}
          />
        </Box>
        <DialogActions>
          <Button color='secondary' variant='outlined'>
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
