import { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Card, CardContent, Box } from '@material-ui/core';
import { MainLayout } from 'layouts';
import { CustomPagination } from 'components';
import { useFetchPosts } from 'helpers';
import PostContent from './PostContent';
import customTheme from 'theme/customTheme';
import UserPostHeader from './UserPostHeader';
import FilterProducts from './FilterProducts';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
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
      width: '35vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20vw',
    },
    [theme.breakpoints.up('xl')]: {
      width: '15vw',
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
const AllPosts = (props) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [callbackData, setCallbackData] = useState(null);
  const status = useSelector((state) => state.post.status);
  const { allPosts } = useFetchPosts({
    compareTo: 'author',
  });
  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  let pageCount = 10;

  let posts;
  if (callbackData) {
    posts = callbackData;
  } else {
    posts = allPosts;
  }
  if (status === 'success') {
    pageCount = Math.ceil(posts?.length / PER_PAGE);
  } else {
    pageCount = 0;
  }
  return (
    <MainLayout>
      <Box className={classes.rootContainer}>
        <FilterProducts
          parentCallback={(allPosts) => setCallbackData(allPosts)}
        />
        <Box>
          <Box className={classes.container}>
            {posts?.length ? (
              posts
                .slice(offset, offset + PER_PAGE)
                .map(({ docID, data }, index) => (
                  <Box p={1} key={index}>
                    <Card raised className={classes.cardContainer}>
                      <CardContent>
                        <UserPostHeader
                          user={data}
                          docID={docID}
                          displayName={data.authorDisplayName}
                          photoURL={data.authorPhoto}
                        />
                        <PostContent docID={docID} data={data} />
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
              onPageChange={onPageChange}
              containerClassName={classes.pagination}
              pageClassName={classes.pageStyle}
              activeClassName={classes.paginationActive}
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

AllPosts.propTypes = {};

export default AllPosts;
