import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, makeStyles, Box } from '@material-ui/core';
import { FluidTypography } from 'components';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useFollowActions } from 'helpers';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '3px solid red',
    display: 'flex',
    flexDirection: 'column',
  },
}));
const FollowersDetails = ({ action = 'following', docID }) => {
  const classes = useStyles();
  const { following } = useFollowActions(docID);
  let uniqueNames = [];
  following.filter(({ data }) =>
    uniqueNames.includes(data.following)
      ? null
      : uniqueNames.push(data.following)
  );
  return (
    <Box className={classes.container}>
      {uniqueNames.map((param) => (
        <Box display='flex' py={1}>
          <FluidTypography text={param} />
          &nbsp;
          <Button
            variant='contained'
            className={classes.button}
            style={{
              color: 'white',
              backgroundColor: 'red',
              maxWidth: '9rem',
              width: '7rem',
            }}
            startIcon={<RemoveCircleOutlineIcon />}
          >
            Unfollow
          </Button>
        </Box>
      ))}
    </Box>
  );
};

FollowersDetails.propTypes = {};

export default FollowersDetails;
