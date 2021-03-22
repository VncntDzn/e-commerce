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
import Headset from '../assets/headset.png';

const TechSlide = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: customTheme.palette.tertiary.light,
      border: '3px solid red',
    },
    containerProd: {
      position: 'relative',
      border: '3px solid blue',
      [theme.breakpoints.down('xs')]: {
        backgroundColor: 'purple',
      },
    },
    card: {
      borderRadius: '20px',
      marginTop: '3vh',

      width: 'fit-content',
      border: '3px solid green',
    },
    image: {
      objectFit: 'contain',
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
    <Grid>
      <Box mx={3}>
        <Typography className={classes.fluid_header} variant='h1'>
          SHOP COMPUTERS & ACCESSORIES
        </Typography>
        <Typography className={classes.fluid_paragraph}>
          Shop laptops, desktops, monitors, tablets, PC Gaming, hard drives and
          storage accessories and more.
        </Typography>
        <Box mt={1}>
          <Button variant='outlined'>View More</Button>
        </Box>
      </Box>

      <Grid container direction='row' style={{ border: '3px solid blue' }}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            style={{
              border: '3px solid red',
            }}
          >
            <Hidden xsDown>
              <img className={classes.image} src={Headset} alt='Headset' />
            </Hidden>
            <Card className={classes.card}>
              <CardContent style={{ paddingBottom: 0 }}>
                <Typography>Computer & Accessories</Typography>
                <Typography>JBL T460BT Black Headphones</Typography>
                <Rating name='size-small' defaultValue={4} size='small' />
              </CardContent>
              <CardActions style={{ padding: 0 }}>
                <Button variant='text'>View More</Button>
              </CardActions>
            </Card>
          </Box>
          <Hidden xsDown>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Hidden xsDown>
                <img className={classes.image} src={Headset} alt='Headset' />
              </Hidden>
              <Card className={classes.card}>
                <CardContent style={{ paddingBottom: 0 }}>
                  <Typography>Computer & Accessories</Typography>
                  <Typography>JBL T460BT Black Headphones</Typography>
                  <Rating name='size-small' defaultValue={4} size='small' />
                </CardContent>
                <CardActions style={{ padding: 0 }}>
                  <Button variant='text'>View More</Button>
                </CardActions>
              </Card>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Hidden xsDown>
                <img className={classes.image} src={Headset} alt='Headset' />
              </Hidden>
              <Card className={classes.card}>
                <CardContent style={{ paddingBottom: 0 }}>
                  <Typography>Computer & Accessories</Typography>
                  <Typography>JBL T460BT Black Headphones</Typography>
                  <Rating name='size-small' defaultValue={4} size='small' />
                </CardContent>
                <CardActions style={{ padding: 0 }}>
                  <Button variant='text'>View More</Button>
                </CardActions>
              </Card>
            </Box>
          </Hidden>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TechSlide;
