import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Grid, Hidden } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';

const Promotions = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: customTheme.palette.secondary.light,
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography>E-comm Basics</Typography>
        <Typography>E-comm Basics</Typography>
      </Grid>
      <Grid item>
        <Typography>Deals & Promotions</Typography>
      </Grid>
    </Grid>
  );
};

Promotions.propTypes = {};

export default Promotions;
