import React from 'react';
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
  return (
    <MainLayout
      children={
        <>
          {/*  <CarouselProvider /> */}
          <Recommendations />
          <Categories />
          <Promotions />
          <ShippingBanner />
          <MenWomen />
          <Community />
          <Footer />
        </>
      }
    />
  );
};

Home.propTypes = {};

export default Home;
