/**
 * PostContent - component for UserPost that displays the information.
 * @param {object} [data] - information of the user's post.
 */
import PropTypes from 'prop-types';
import { CardMedia, Box, Button, makeStyles } from '@material-ui/core';
import { FluidTypography } from 'components';
import { useHistory } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: 'contain',
    height: '15rem',
    width: '100%',
  },
}));
const PostContent = ({ docID, data }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <CardMedia
        component='img'
        className={classes.image}
        src={data.links[0]}
        alt='product'
      />

      <FluidTypography
        text={`Ships from ${data.location}`}
        minSize='0.8rem'
        size='0.7rem'
        maxSize='0.8rem'
        fontWeight='500'
        color='#808080'
      />
      <FluidTypography
        text={data.productName}
        minSize='1rem'
        size='0.9rem'
        maxSize='1rem'
        fontWeight='500'
      />
      <FluidTypography
        text={`₱ ${parseFloat(data.price).toFixed(2)}`}
        minSize='1rem'
        size='0.9rem'
        maxSize='1rem'
        fontWeight='500'
      />

      <ReactStars
        value={data.rating}
        count={5}
        edit={false}
        size={24}
        activeColor='#ffd700'
      />
      <Box display='flex' justifyContent='flex-end'>
        <Button
          variant='contained'
          onClick={() => {
            history.push(`/product/single-post/${docID}`);
          }}
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          View
        </Button>
      </Box>
    </>
  );
};

PostContent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostContent;
