import { useState } from 'react';
import { makeStyles, Tabs, Tab, Box, Button, Grid } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import { FluidTypography } from 'components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const useStyles = makeStyles((theme) => ({
  container: {},
}));
const ProductInformation = ({ info }) => {
  const classes = useStyles();
  const [readMore, setReadMore] = useState(false);
  return (
    <Grid className={classes.container}>
      <TransformWrapper>
        <TransformComponent>
          <Carousel emulateTouch={true}>
            {info.links.map((link, index) => (
              <img key={index} src={link} alt='product' />
            ))}
          </Carousel>
        </TransformComponent>
      </TransformWrapper>
      <ReactStars count={5} edit={false} size={24} activeColor='#ffd700' />
      <FluidTypography
        text={info.productName}
        minSize='1rem'
        size='1.3rem'
        maxSize='1.5rem'
        color='black'
        fontWeight='500'
      />

      <Box display='flex' justifyContent='space-between'>
        <FluidTypography
          text={`₱${info.price}`}
          minSize='1rem'
          size='1.3rem'
          maxSize='1.5rem'
          color='black'
          fontWeight='500'
        />
        <FluidTypography
          text={`Stock: ${info.stock}`}
          minSize='1rem'
          size='1.3rem'
          maxSize='1.5rem'
          color='black'
          fontWeight='500'
        />
      </Box>

      {readMore ? (
        <ReactQuill
          className={classes.selectContainer}
          theme='bubble'
          readOnly={true}
          value={info.description}
        />
      ) : (
        <HTMLEllipsis
          unsafeHTML={info.description}
          maxLine='3'
          ellipsisHTML='<span style="color: blue"> &nbsp;Read more...</span> '
          basedOn='letters'
          onClick={() => setReadMore(!readMore)}
        />
      )}

      <Box display='flex' justifyContent='space-between'>
        <Button
          variant='contained'
          color='secondary'
          style={{ color: 'white' }}
        >
          Buy Now
        </Button>
        <Button variant='outlined'>Add to Cart</Button>
      </Box>
    </Grid>
  );
};

ProductInformation.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ProductInformation;
