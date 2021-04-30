/**
 * Reviews component is the parent component of comment panel and comments.
 * @param {string} [docID] - document id of the current post.
 */
import { useEffect } from 'react';
import { makeStyles, Card, CardContent } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { retrieveComments } from 'store/slices/commentSlice';
import Comments from './Comments';
import CommentPanel from './CommentPanel';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90vw',
    [theme.breakpoints.up('sm')]: {
      width: '95vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '30.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '43vw',
    },
  },
}));

const Reviews = ({ userEmail, docID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveComments({ docID }));
  }, [dispatch, docID]);
  return (
    <Card className={classes.container}>
      <CardContent>
        <CommentPanel docID={docID} />
        <hr style={{ width: '100%' }} />
        <Comments userEmail={userEmail} docID={docID} />
      </CardContent>
    </Card>
  );
};

Reviews.propTypes = {
  docID: PropTypes.string.isRequired,
};

export default Reviews;
