import React from 'react';
import {
  makeStyles,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      width: '95vw',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-10rem',
      width: '30.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-13rem',
      width: '43vw',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-17rem',
    },
  },
}));

const Reviews = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Card className={classes.container}>
        <CardContent>
          <TextField
            fullWidth
            label='Add a review'
            variant='outlined'
            color='secondary'
          />
          <Box display='flex' justifyContent='flex-end' alignItems='flex-end'>
            <CardActions>
              <Button
                variant='contained'
                color='secondary'
                style={{ color: 'white' }}
              >
                Reply
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

Reviews.propTypes = {};

export default Reviews;
