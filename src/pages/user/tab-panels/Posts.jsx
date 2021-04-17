import { useEffect } from 'react';
import { Card, CardContent, Button, Box, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUserPosts } from 'store/slices/postsSlice';
import { FluidTypography } from 'components';
import ReactStars from 'react-rating-stars-component';

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    height: 'fit-content',
  },
  cardContainer: {
    margin: '1rem 0',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: '30vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '15vw',
    },
  },
}));
const Posts = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(retrieveUserPosts());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      {posts?.length ? (
        posts.map((post, index) => (
          <Card raised key={index} className={classes.cardContainer}>
            <CardContent>
              <img
                className={classes.image}
                src={post.links[0]}
                alt='product'
              />

              <FluidTypography
                text={post.productName}
                minSize='1rem'
                size='0.9rem'
                maxSize='1rem'
                fontWeight='500'
              />
              <FluidTypography
                text={`₱ ${post.price}`}
                minSize='1rem'
                size='0.9rem'
                maxSize='1rem'
                fontWeight='500'
              />

              <ReactStars
                count={5}
                edit={false}
                size={24}
                activeColor='#ffd700'
              />

              <Box display='flex' justifyContent='flex-end'>
                <Button
                  variant='contained'
                  color='secondary'
                  style={{ color: 'white' }}
                >
                  Buy
                </Button>
                &nbsp;
                <Button
                  variant='contained'
                  style={{ backgroundColor: 'red', color: 'white' }}
                >
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <div>
          <h1>Nothing to see here yet.</h1>
        </div>
      )}
    </Box>
  );
};

Posts.propTypes = {};

export default Posts;
