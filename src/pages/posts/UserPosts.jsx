/**
 * UserPost component displays the posts of the user by getting the email of the current user.
 * @param {object} [user] - current user, if user has no post then display an h1 tag.
 */
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  Box,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUserPosts } from 'store/slices/postsSlice';
import { FluidTypography, ProductPanel } from 'components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  largeAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(2),
    display: 'flex',
    alignSelf: 'center',
  },
}));
const UserPosts = ({ user }) => {
  const { email, photoURL } = user;
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [editDialog, setEditDialog] = useState(false);
  const userPosts = useSelector((state) => state.posts.userPosts);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    dispatch(retrieveUserPosts({ email }));
  }, [email, dispatch]);

  return (
    <Box className={classes.container}>
      {userPosts?.length ? (
        userPosts.map((post, index) => (
          <Card raised key={index} className={classes.cardContainer}>
            <CardContent>
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                mb={1}
              >
                <Box display='flex' alignItems='center'>
                  <Avatar className={classes.largeAvatar} src={photoURL} />
                  <FluidTypography
                    text={post.displayName}
                    minSize='1rem'
                    size='0.9rem'
                    maxSize='1rem'
                    fontWeight='500'
                    variant='subtitle1'
                  />
                </Box>
                <IconButton
                  onClick={handleClick}
                  style={{ padding: 0, margin: 0 }}
                >
                  <MoreHorizIcon />
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => setEditDialog(true)}>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </Menu>
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
                variant='subtitle1'
              />
              <FluidTypography
                text={`₱ ${parseFloat(post.price).toFixed(2)}`}
                minSize='1rem'
                size='0.9rem'
                maxSize='1rem'
                fontWeight='500'
                variant='subtitle1'
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

      <ProductPanel
        openEdit={editDialog}
        closeEdit={() => setEditDialog(false)}
        user={user}
        action='edit'
      />
    </Box>
  );
};

UserPosts.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserPosts;
