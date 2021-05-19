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

export default CarouselProvider;
