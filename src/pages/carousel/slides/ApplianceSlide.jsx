import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Grid,
  Hidden,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';
import Refrigerator from '../assets/refrigerator.jpg';

const ApplianceSlide = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: customTheme.palette.tertiary.light,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      width: '100vw',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        placeContent: 'center',
        justifyContent: 'space-evenly',
      },
    },
    containerSlogan: {
      display: 'flex',
      flexDirection: 'column',

      [theme.breakpoints.up('lg')]: {
        placeContent: 'center',
      },
    },

    card: {
      borderRadius: '20px',
      width: 'fit-content',
      padding: '2px',
      display: 'flex',
      flexDirection: 'column',
      placeContent: 'center',
    },
    image: {
      objectFit: 'contain',
      alignSelf: 'center',
      [theme.breakpoints.up('sm')]: {
        height: '20vh',
        width: '20vw',
      },
    },
    fluid_header: {
      fontSize: 'clamp(1.5rem, 5vw, 3rem)',
      fontWeight: 500,
    },
    fluid_paragraph: {
      fontSize: 'clamp(1rem, 4vw, 1.3rem)',
    },
  }));

  const classes = useStyles();
  return (
    <Grid className={classes.container} container direction='row'>
      <Grid className={classes.containerSlogan} item md={6} lg={5}>
        <Box mx={3} py={2}>
          <Typography className={classes.fluid_header} variant='h1'>
            SHOP APPLIANCES & ACCESSORIES
          </Typography>
          <Typography className={classes.fluid_paragraph}>
            Shop laptops, desktops, monitors, tablets, PC Gaming, hard drives
            and storage accessories and more.
          </Typography>
          <Box mt={1}>
            <Button variant='outlined'>View More</Button>
          </Box>
        </Box>
      </Grid>

      <Grid item lg={6} md={6} className={classes.containerProduct}>
        <Box
          m={3}
          display='flex'
          flexDirection='row'
          justifyContent='space-evenly'
        >
          <Card className={classes.card}>
            <Hidden xsDown>
              <img
                className={classes.image}
                src={Refrigerator}
                alt='Refrigerator'
              />
            </Hidden>
            <CardContent style={{ paddingBottom: 0 }}>
              <Typography>Computer & Accessories</Typography>
              <Typography>JBL T460BT Black Headphones</Typography>
              <Rating name='size-small' defaultValue={4} size='small' />
            </CardContent>
            <CardActions style={{ padding: 0 }}>
              <Button variant='text'>View More</Button>
            </CardActions>
          </Card>
          <Hidden only={['xs', 'md', 'lg', 'xl']}>
            <Card className={classes.card}>
              <img
                className={classes.image}
                src={Refrigerator}
                alt='Refrigerator'
              />
              <CardContent style={{ paddingBottom: 0 }}>
                <Typography>Computer & Accessories</Typography>
                <Typography>JBL T460BT Black Headphones</Typography>
                <Rating name='size-small' defaultValue={4} size='small' />
              </CardContent>
              <CardActions style={{ padding: 0 }}>
                <Button variant='text'>View More</Button>
              </CardActions>
            </Card>
          </Hidden>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ApplianceSlide;
