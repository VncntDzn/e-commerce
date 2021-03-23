import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Hidden,
  Card,
  CardActions,
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';
import macbook from './assets/macbook.png';
const Categories = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      border: '3px solid blue',
      marginTop: '2rem',
    },
    fluid_header: {
      fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
      fontWeight: 500,
    },
    fluid_paragraph: {
      fontSize: 'clamp(1rem, 4vw, 1.3rem)',
    },

    card: {
      borderRadius: '20px',

      width: 'fit-content',
      padding: '5px',
    },
    image: {
      objectFit: 'contain',
      [theme.breakpoints.down('sm')]: {
        height: '15rem',
        width: '15rem',
      },
    },
  }));
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Box display='flex' justifyContent='space-between' mx={1}>
        <Typography className={classes.fluid_header} variant='caption'>
          Shop by categories
        </Typography>
        <Typography className={classes.fluid_header} variant='caption'>
          All Departments ⟶
        </Typography>
      </Box>
      <Box m={3}>
        <img className={classes.image} alt='Macbook' src={macbook} />
      </Box>
    </Grid>
  );
};

Categories.propTypes = {};

export default Categories;
