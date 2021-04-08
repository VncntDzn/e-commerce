import React from 'react';
import {
  Button,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';
import customTheme from 'theme/customTheme';

const useStyles = makeStyles((theme) => ({
  container: {
    /*  border: '3px solid red', */
    margin: 0,
    padding: 0,
  },
  buttonStyle: {
    '&:hover': {
      color: customTheme.palette.secondary.main,
    },
  },
}));
const UserDetails = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid container item xs={3} display='flex' alignItems='center'>
        <Avatar>V</Avatar>
      </Grid>
      <Grid
        container
        item
        xs={9}
        sm={6}
        display='flex'
        justify='center'
        direction='column'
      >
        <Typography>Vincent Dizon</Typography>
        <Button className={classes.buttonStyle} variant='outlined'>
          EDIT PROFILE
        </Button>
      </Grid>
      <Grid>
        <Box my={1}>
          <Divider
            variant='fullWidth'
            style={{
              width: '100vw',
              margin: '0.8rem 0',
              marginLeft: '-1rem',
            }}
          />
          <Box display='flex' justifyContent='space-around'>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Avatar>V</Avatar>
              <Typography>23 posts</Typography>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Avatar>V</Avatar>
              <Typography>142 followers</Typography>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Avatar>V</Avatar>
              <Typography>55 following</Typography>
            </Box>
          </Box>
          <Divider
            variant='fullWidth'
            light
            style={{
              width: '100vw',
              borderWidth: '2px',
              margin: '0.8rem 0',
              marginLeft: '-1rem',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
