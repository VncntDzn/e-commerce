import { useEffect } from 'react';
import {
  Card,
  CardContent,
  Button,
  Box,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUserPosts } from 'store/slices/postsSlice';
import { FluidTypography } from 'components';
import { useHistory } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
    width: '20rem',
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
const UserPosts = ({ email }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.posts.userPosts);

  useEffect(() => {
    dispatch(retrieveUserPosts({ email }));
  }, [email, dispatch]);

  return (
    <Box className={classes.container}>
      {userPosts?.length ? (
        userPosts.map((post, index) => (
          <Card raised key={index} className={classes.cardContainer}>
            <CardContent>
              <Box display='flex' justifyContent='space-between'>
                <FluidTypography
                  text={post.displayName}
                  minSize='1rem'
                  size='0.9rem'
                  maxSize='1rem'
                  fontWeight='500'
                />
                <IconButton style={{ padding: 0, margin: 0 }}>
                  <MoreHorizIcon />
                </IconButton>
              </Box>
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
                text={`₱ ${parseFloat(post.price).toFixed(2)}`}
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
                  onClick={() => {
                    history.push(`/product/single-post/${post.nanoID}`);
                  }}
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

UserPosts.propTypes = {};

export default UserPosts;
