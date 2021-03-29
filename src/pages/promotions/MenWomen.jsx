import React from 'react';
import { Typography, Box, Grid, Hidden, Button } from '@material-ui/core';

import { FluidTypography } from 'components';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';
import GirlFashion from './assets/girl_fashion.png';
import ManFashion from './assets/man_fashion.png';
const MenWomen = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    ecommBasics: {
      backgroundColor: customTheme.palette.secondary.light,
      margin: '1rem ',
    },
    ecommDeals: {
      backgroundColor: customTheme.palette.secondary.light,
      margin: '1rem',
    },
    fluid_header: {
      fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
      fontWeight: 500,
    },
    fluid_paragraph: {
      fontSize: '1rem',
    },
    image: {
      objectFit: 'contain',
      height: '20rem',
      width: '20rem',
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item container className={classes.ecommBasics} sm={5} md={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <FluidTypography
            text='Comfy styles for her'
            minSize='1.3rem'
            size='5vw'
            maxSize='2rem'
            color='black'
            fontWeight='500'
            variant='h1'
          />
          <FluidTypography
            text='Shop E-comm Fashion including clothing, shoes, jewelry, watches,
            bags and more.'
            size='1.1rem'
          />
          <Box>
            <Button variant='outlined' style={{ marginTop: '1rem' }}>
              See More ⟶
            </Button>
          </Box>
        </Box>
        <Hidden lgDown>
          <Box display='flex' justifyContent='space-evenly' width='100vw'>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              pl={5}
            >
              <Typography className={classes.fluid_paragraph}>
                <blockquote cite='https://manofmany.com/fashion/mens-fashion-trends/best-fashion-quotes'>
                  “Fashion is an art. You express who you are through what
                  you’re wearing.” – Daniele Donato
                </blockquote>
              </Typography>
            </Box>
            <Box>
              <img
                className={classes.image}
                alt='Girl Fashion'
                src={GirlFashion}
              />
            </Box>
          </Box>
        </Hidden>
      </Grid>
      <Grid item container className={classes.ecommDeals} md={5} sm={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Typography className={classes.fluid_header}>
            Comfy styles for him
          </Typography>
          <Typography className={classes.fluid_paragraph}>
            Shop E-comm Fashion including clothing, shoes, jewelry, watches,
            bags and more.
          </Typography>
          <Box>
            <Button variant='outlined' style={{ marginTop: '1rem' }}>
              See More ⟶
            </Button>
          </Box>
        </Box>
        <Hidden lgDown>
          <Box display='flex' justifyContent='space-evenly' width='100vw'>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              pl={5}
            >
              <Typography className={classes.fluid_paragraph}>
                <blockquote cite='https://manofmany.com/fashion/mens-fashion-trends/best-fashion-quotes'>
                  “Fashion is an art. You express who you are through what
                  you’re wearing.” – Daniele Donato
                </blockquote>
              </Typography>
            </Box>
            <Box>
              <img
                className={classes.image}
                alt='Man Fashion'
                src={ManFashion}
              />
            </Box>
          </Box>
        </Hidden>
      </Grid>
    </Grid>
  );
};

MenWomen.propTypes = {};

export default MenWomen;
