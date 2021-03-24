import Carousel from 'react-material-ui-carousel';
import { TechSlide, ApplianceSlide } from './slides';

const CarouselProvider = (props) => {
  return (
    <Carousel>
      <TechSlide />
      <ApplianceSlide />
    </Carousel>
  );
};

CarouselProvider.propTypes = {};

export default CarouselProvider;
