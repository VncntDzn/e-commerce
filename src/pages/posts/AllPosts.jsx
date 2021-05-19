import { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Card, CardContent, Box } from '@material-ui/core';
import { MainLayout } from 'layouts';
import { CustomPagination } from 'components';
import { useFetchPosts } from 'helpers';
import PostContent from './PostContent';
import UserPostHeader from './UserPostHeader';
import FilterProducts from './FilterProducts';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  filterProductsContainer: {
    flex: 0.2,
    [theme.breakpoints.up('lg')]: {
      marginLeft: '-3rem',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
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
const AllPosts = (props) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [callbackData, setCallbackData] = useState(null);
  const status = useSelector((state) => state.post.status);
  const { allPosts } = useFetchPosts({
    compareTo: null,
  });
  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 6;
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
        <Box className={classes.filterProductsContainer}>
          <FilterProducts
            parentCallback={(allPosts) => setCallbackData(allPosts)}
          />
        </Box>
        <Box className={classes.container}>
          {posts?.length ? (
            posts
              .slice(offset, offset + PER_PAGE)
              .map(({ docID, data }, index) => (
                <Box p={1} key={index}>
                  <Card raised className={classes.cardContainer}>
                    <CardContent>
                      <UserPostHeader
                        docID={docID}
                        data={data}
                        email={data.author}
                      />
                      <PostContent docID={docID} data={data} />
                    </CardContent>
                  </Card>
                  <CustomPagination
                    pageCount={pageCount}
                    onPageChange={onPageChange}
                  />
                </Box>
              ))
          ) : (
            <Box display='flex' justifyContent='center'>
              <h1>Nothing to see here yet.</h1>
            </Box>
          )}
        </Box>
      </Box>
    </MainLayout>
  );
};
export default AllPosts;
