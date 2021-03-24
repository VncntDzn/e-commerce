import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {
  CarouselProvider,
  Recommendations,
  Categories,
  ShippingBanner,
  Promotions,
  MenWomen,
  Community,
  Footer,
} from 'pages';

import { MainLayout } from 'layouts';

const Home = (props) => {
  const useStyles = makeStyles((theme) => ({
    boxContainer: {
      margin: '0 1rem',
      marginTop: '5rem',
      [theme.breakpoints.up('lg')]: {
        margin: '0 6rem',
        marginTop: '5rem',
      },
    },
  }));

  const classes = useStyles();
  return (
    <MainLayout
      children={
        <Box className={classes.boxContainer}>
          <CarouselProvider />
          <Recommendations />
          <Categories />
          <Promotions />
          <ShippingBanner />
          <MenWomen />
          <Community />
          <Footer />
        </Box>
      }
    />
  );
};

Home.propTypes = {};

export default Home;
