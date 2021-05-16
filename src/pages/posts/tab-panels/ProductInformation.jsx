/**
 * ProductInformation component - display the details of the post.
 * @param {object} [info] - object passed from SinglePost Page.
 * @param {string} [docID] - document id passed from SinglePost Page.
 */
import { useState } from 'react';
import {
  makeStyles,
  Hidden,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
} from '@material-ui/core';
import { FluidTypography } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Carousel } from 'react-responsive-carousel';
import { ADD_TO_CHECKOUT } from 'store/slices/orderSlice';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      width: '95vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '30.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '42.7vw',
    },
  },
  imageContainer: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    objectFit: 'contain',
  },
}));

const ProductInformation = ({ docID, info }) => {
  const classes = useStyles();
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.auth.uid);
  const currentUserDisplayName = useSelector((state) => state.auth.displayName);
  return (
    <Box className={classes.container}>
      <Card>
        <CardContent>
          <Hidden mdUp>
            <Box className={classes.imageContainer}>
              <TransformWrapper>
                <TransformComponent>
                  <Carousel emulateTouch={true}>
                    {info?.links.map((link, index) => (
                      <img key={index} src={link} alt='product' />
                    ))}
                  </Carousel>
                </TransformComponent>
              </TransformWrapper>
            </Box>
          </Hidden>

          <Box fontStyle='italic' display='flex' alignItems='center'>
            <IconButton color='secondary'>
              <LocalShippingIcon />
            </IconButton>
            <FluidTypography
              text={`Ships from ${info?.location}`}
              minSize='1rem'
              size='1rem'
              maxSize='1rem'
              color='gray'
              fontWeight='500'
            />
          </Box>
          <FluidTypography
            text={`Item by: ${info?.author}`}
            minSize='1rem'
            size='1rem'
            maxSize='1rem'
            color='gray'
            fontWeight='500'
          />
          <FluidTypography
            text={info?.productName}
            minSize='1rem'
            size='1.3rem'
            maxSize='1.5rem'
            color='black'
            fontWeight='500'
          />
          <Box display='flex' justifyContent='flex-start' alignItems='center'>
            {info?.rating && (
              <ReactStars
                value={info?.rating}
                count={5}
                edit={false}
                size={24}
                activeColor='#ffd700'
              />
            )}
            &nbsp;
            <FluidTypography
              text={`${[info?.rating].length} rating/s`}
              minSize='1rem'
              size='1.1rem'
              maxSize='1.5rem'
              color='black'
              fontWeight='500'
            />
            &nbsp;
            <h2 style={{ padding: 0, margin: 0 }}>|</h2>
            &nbsp;
            <FluidTypography
              text={`${[info?.sold].length} sold`}
              minSize='1rem'
              size='1.1rem'
              maxSize='1.5rem'
              color='black'
              fontWeight='500'
            />
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <FluidTypography
              text={`₱${parseFloat(info?.price).toFixed(2)}`}
              minSize='1rem'
              size='1.3rem'
              maxSize='1.5rem'
              color='black'
              fontWeight='500'
            />
            <FluidTypography
              text={`Stock: ${info?.stock}`}
              minSize='1rem'
              size='1.3rem'
              maxSize='1.5rem'
              color='black'
              fontWeight='500'
            />
          </Box>

          <FluidTypography
            text='About this item: '
            minSize='1rem'
            size='1rem'
            maxSize='1.5rem'
            color='black'
            fontWeight='500'
          />
          {readMore ? (
            <ReactQuill
              className={classes.selectContainer}
              theme='bubble'
              readOnly={true}
              value={info?.description}
            />
          ) : (
            <HTMLEllipsis
              unsafeHTML={info?.description}
              maxLine='3'
              ellipsisHTML='<span style="color: blue"> &nbsp;Read more...</span> '
              basedOn='letters'
              onClick={() => setReadMore(!readMore)}
            />
          )}

          <Box display='flex' justifyContent='space-between'>
            <Button
              variant='outlined'
              color='secondary'
              onClick={() =>
                dispatch(
                  ADD_TO_CHECKOUT({
                    docID,
                    info,
                    uid,
                    type: 'favorite',
                    buyer: currentUserDisplayName,
                  })
                )
              }
            >
              Add to Favorites
            </Button>
            &nbsp;
            <Button
              variant='contained'
              color='secondary'
              style={{ color: 'white' }}
              onClick={() =>
                dispatch(
                  ADD_TO_CHECKOUT({
                    docID,
                    info,
                    uid,
                    type: 'order',
                    buyer: currentUserDisplayName,
                  })
                )
              }
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

ProductInformation.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ProductInformation;
