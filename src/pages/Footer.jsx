import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Box, Grid, Hidden } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';
import HappyPeople from './assets/community.png';

const Community = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: customTheme.palette.tertiary.light,
    },
    containerSlogan: {
      display: 'flex',
      flexDirection: 'column',
      placeContent: 'center',
    },
    fluid_header: {
      fontSize: 'clamp(1.5rem, 5vw, 3rem)',
      fontWeight: 600,
    },
    fluid_paragraph: {
      fontSize: 'clamp(1rem, 4vw, 1.3rem)',
      color: `${customTheme.palette.tertiary.dark}`,
    },
  }));

  const classes = useStyles();
  return (
    <Grid container direction='row'>
      <Box>Footer Here!</Box>
    </Grid>
  );
};

Community.propTypes = {};

export default Community;
