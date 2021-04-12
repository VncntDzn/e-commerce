import {
  Button,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Box,
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
          <Button className={classes.buttonStyle} variant='outlined'>
            EDIT PROFILE
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default UserDetails;
