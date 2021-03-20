import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';

import Headset from './assets/headset.png';
const Slideshow = (props) => {
  const useStyles = makeStyles({
    container: {
      backgroundColor: customTheme.palette.tertiary.light,
    },
  });
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container>
        <Typography>SHOP COMPUTERS & ACCESSORIES</Typography>
        <Typography>
          Shop laptops, desktops, monitors, tablets, PC Gaming, hard drives and
          storage accessories and more.
        </Typography>
        <Button variant='outlined'>View More</Button>
      </Container>

      <Container>
        <img
          src={Headset}
          alt='Headset'
          style={{ objectFit: 'contain', height: '50vh', width: '50vw' }}
        />
        <Card>
          <CardContent>
            <Typography>Computer & Accessories</Typography>
            <Typography>JBL T460BT Black Headphones</Typography>
            <Rating name='size-small' defaultValue={2} size='small' />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

Slideshow.propTypes = {};

export default Slideshow;
