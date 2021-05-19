/**
 * UserPost component displays the posts of the user by getting the email of the current user.
 * @param {object} [user] - current user, if user has no post then display an h1 tag.
 */
import { useEffect, useState } from 'react';
import { Card, CardContent, Box, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RETRIEVE_POSTS } from 'store/slices/postsSlice';
import { CustomPagination } from 'components';
import { useFetchPosts } from 'helpers';
import PropTypes from 'prop-types';
import UserPostHeader from './UserPostHeader';
import PostContent from './PostContent';

const useStyles = makeStyles((theme) => ({
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
      width: '35vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20vw',
    },
    [theme.breakpoints.up('xl')]: {
      width: '15vw',
    },
  },
}));
const UserPosts = ({ email }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const { allPosts } = useFetchPosts({ compareTo: null, compareFrom: null });
  const products = allPosts.filter(({ data }) => email === data.author);
  const postStatus = useSelector((state) => state.post.status);

  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  let pageCount = 10;

  useEffect(() => {
    dispatch(RETRIEVE_POSTS());
  }, [email, dispatch]);

  if (postStatus === 'success') {
    pageCount = Math.ceil(products.length / PER_PAGE);
  } else {
    pageCount = 0;
  }
  return (
    <Box>
      <Box className={classes.container}>
        {products?.length ? (
          products.slice(offset, offset + PER_PAGE).map(({ data, docID }) => (
            <Box key={docID} p={1}>
              <Card raised className={classes.cardContainer}>
                <CardContent>
                  <UserPostHeader email={email} docID={docID} data={data} />
                  <PostContent docID={docID} data={data} />
                </CardContent>
              </Card>
              <Box display='flex' justifyContent='center'>
                <CustomPagination
                  pageCount={pageCount}
                  onPageChange={onPageChange}
                />
              </Box>
            </Box>
          ))
        ) : (
          <Box display='flex' justifyContent='center'>
            <h1>Nothing to see here yet.</h1>
          </Box>
        )}
      </Box>
    </Box>
  );
};

UserPosts.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserPosts;
