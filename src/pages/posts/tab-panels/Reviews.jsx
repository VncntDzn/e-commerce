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
    width: '90vw',
  },
}));

const Reviews = (props) => {
  const classes = useStyles();
  return (
    <Box>
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
