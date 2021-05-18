import { useState } from 'react';
import { MainLayout } from 'layouts';
import { useFollowActions } from 'helpers';
import { useSelector } from 'react-redux';
import { makeStyles, Card, CardContent, Box } from '@material-ui/core';
import { CustomPagination } from 'components';
import UserPostHeader from '../posts/UserPostHeader';
import PostContent from '../posts/PostContent';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 'fit-content',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  cardContainer: {
    margin: '1rem 0',
    height: 'fit-content',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      width: '25vw',
      flexDirection: 'row',
    },
  },
}));
const Followers = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const status = useSelector((state) => state.post.status);

  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  let pageCount = 10;

  const followedID = useSelector((state) => state.people.followedUserID);
  const { following } = useFollowActions(followedID);

  if (status === 'success') {
    pageCount = Math.ceil(following?.length / PER_PAGE);
  } else {
    pageCount = 0;
  }

  return (
    <MainLayout>
      {following?.length ? (
        following.slice(offset, offset + PER_PAGE).map(({ data }, index) => (
          <Box className={classes.container} key={index}>
            {data.postsByFollowedUser.map(({ data, docID }, index) => (
              <Card raised className={classes.cardContainer} key={index}>
                <CardContent>
                  <UserPostHeader
                    docID={docID}
                    data={data}
                    email={data.author}
                  />
                  <PostContent docID={docID} data={data} />
                </CardContent>
              </Card>
            ))}
          </Box>
        ))
      ) : (
        <div>
          <h1>Nothing to see here yet.</h1>
        </div>
      )}
      <Box display='flex' justifyContent='center'>
        <CustomPagination
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName={classes.pagination}
          pageClassName={classes.pageStyle}
          activeClassName={classes.paginationActive}
        />
      </Box>
    </MainLayout>
  );
};

export default Followers;
