import React from 'react';
import PropTypes from 'prop-types';

import { Button, Typography, Box, Grid, Hidden } from '@material-ui/core';
const Promotions = (props) => {
  return (
    <Grid container>
      <Grid item>
        <Typography>Amazon Basics</Typography>
        <Typography>Amazon Basics</Typography>
      </Grid>
      <Grid item>
        <Typography>Deals & Promotions</Typography>
      </Grid>
    </Grid>
  );
};

Promotions.propTypes = {};

export default Promotions;
