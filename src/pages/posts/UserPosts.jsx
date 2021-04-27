/**
 * UserPost component displays the posts of the user by getting the email of the current user.
 * @param {object} [user] - current user, if user has no post then display an h1 tag.
 */
import { useEffect, useState } from 'react';
import { Card, CardContent, Box, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUserPosts } from 'store/slices/postsSlice';
import { UserPostHeader, UserPostContent } from './userposts-comps';
import { CustomPagination } from 'components';
import PropTypes from 'prop-types';
import customTheme from 'theme/customTheme';

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
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '20px',
    listStyle: 'none',
    padding: '0.8rem 0',
    paddingRight: '1rem',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '30rem',
    },
  },
  pageStyle: {
    cursor: 'pointer',
  },
  paginationActive: {
    backgroundColor: customTheme.palette.secondary.main,
    color: 'white',
    padding: theme.spacing(1),
    borderRadius: '20%',
  },
}));
const UserPosts = ({ user }) => {
  const { email, photoURL } = user;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const userPosts = useSelector((state) => state.posts.userPosts);
  const userPostStatus = useSelector((state) => state.posts.userPostStatus);
  const displayName = useSelector((state) => state.auth.displayName);

  // get the current page
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  let pageCount = 10;
  useEffect(() => {
    dispatch(retrieveUserPosts({ email }));
  }, [email, dispatch]);

  if (userPostStatus === 'success') {
    pageCount = Math.ceil(userPosts.length / PER_PAGE);
  } else {
    pageCount = 0;
  }
  return (
    <Box>
      <Box className={classes.container}>
        {userPosts?.length ? (
          userPosts
            .slice(offset, offset + PER_PAGE)
            .map(({ data, docID }, index) => (
              <Box p={1}>
                <Card raised key={index} className={classes.cardContainer}>
                  <CardContent>
                    <UserPostHeader
                      user={user}
                      docID={docID}
                      displayName={displayName}
                      photoURL={photoURL}
                    />
                    <UserPostContent data={data} />
                  </CardContent>
                </Card>
              </Box>
            ))
        ) : (
          <div>
            <h1>Nothing to see here yet.</h1>
          </div>
        )}
      </Box>
      <Box display='flex' justifyContent='center'>
        <CustomPagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          containerClassName={classes.pagination}
          pageClassName={classes.pageStyle}
          activeClassName={classes.paginationActive}
        />
      </Box>
    </Box>
  );
};

UserPosts.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserPosts;
