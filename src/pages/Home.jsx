import {
  CarouselProvider,
  Recommendations,
  Categories,
  ShippingBanner,
  Promotions,
  MenWomen,
  Community,
} from 'pages';
import { MainLayout } from 'layouts';

const Home = (props) => {
  return (
    <MainLayout
      children={
        <>
          <CarouselProvider />
          <Recommendations />
          <Categories />
          <Promotions />
          <ShippingBanner />
          <MenWomen />
          <Community />
        </>
      }
    />
  );
};

Home.propTypes = {};

export default Home;
