import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { TechSlide } from './slides/';
const CarouselProvider = (props) => {
  return (
    <Carousel>
      <TechSlide />
      <TechSlide />
    </Carousel>
  );
};

CarouselProvider.propTypes = {};

export default CarouselProvider;
