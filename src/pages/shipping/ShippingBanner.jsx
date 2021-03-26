import React from 'react';
import { Button, Typography, Box, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';
import puppy from './assets/puppy.png';

const ShippingBanner = (props) => {
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
      <Box
        display='flex'
        justifyContent='space-evenly'
        width='100vw'
        px={3}
        py={2}
        my={2}
        className={classes.container}
      >
        <Grid item className={classes.containerSlogan} md={6} lg={5}>
          <Typography className={classes.fluid_paragraph}>
            Discover E-comm
          </Typography>
          <Typography className={classes.fluid_header}>
            E-COMM DELIVERS TO YOU
          </Typography>
          <Typography className={classes.fluid_paragraph} variant='h6'>
            Worldwide shipping. We ship to over 100 countries and regions, right
            to your doorstep.
          </Typography>
          <Box width={'100%'} mt={2}>
            <Button variant='outlined'>View More</Button>
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid lg={3} item md={6}>
            <img src={puppy} alt='Puppy inside a box' />
          </Grid>
        </Hidden>
      </Box>
    </Grid>
  );
};

ShippingBanner.propTypes = {};

export default ShippingBanner;
