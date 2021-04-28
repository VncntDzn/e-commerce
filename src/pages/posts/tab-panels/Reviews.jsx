import { useEffect } from 'react';
import { makeStyles, Box, Card, CardContent } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { retrieveComments } from 'store/slices/commentSlice';
import Comments from './Comments';
import CommentPanel from './CommentPanel';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      width: '95vw',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-10rem',
      width: '30.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-13rem',
      width: '43vw',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-17rem',
    },
  },
}));

const Reviews = ({ info, docID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveComments({ docID }));
  }, [dispatch, docID]);
  return (
    <Box className={classes.container}>
      <Card>
        <CardContent style={{ width: '91vw' }}>
          <CommentPanel docID={docID} />
          <Comments info={info} />
        </CardContent>
      </Card>
    </Box>
  );
};

Reviews.propTypes = {};

export default Reviews;
