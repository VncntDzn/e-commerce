import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { TechSlide, ApplianceSlide } from './slides/';

const CarouselProvider = (props) => {
  const items = [
    {
      component: <TechSlide />,
    },
  ];
  return (
    <Carousel>
      <TechSlide />
      <ApplianceSlide />
    </Carousel>
  );
};

CarouselProvider.propTypes = {};

export default CarouselProvider;
