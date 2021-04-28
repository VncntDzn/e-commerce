import { useState, useEffect } from 'react';
import {
  makeStyles,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, retrieveComments } from 'store/slices/commentSlice';
import FluidTypography from 'components/FluidTypography';

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

const Reviews = ({ docID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comment, setComment] = useState(null);
  const author = useSelector((state) => state.auth.displayName);
  const retrievedComments = useSelector((state) => state.comment.comments);

  const handleCommentReply = () => {
    dispatch(addComment({ author, comment, docID }));
  };
  useEffect(() => {
    dispatch(retrieveComments({ docID }));
  }, [dispatch, docID]);
  return (
    <Box className={classes.container}>
      <Card className={classes.container}>
        <CardContent>
          <TextField
            fullWidth
            label='Add a review'
            variant='outlined'
            color='secondary'
            onChange={(e) => setComment(e.target.value)}
          />
          <Box display='flex' justifyContent='flex-end' alignItems='flex-end'>
            <CardActions>
              <Button
                onClick={handleCommentReply}
                variant='contained'
                color='secondary'
                style={{ color: 'white' }}
              >
                Reply
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
      {retrievedComments.map((data) => (
        <Box>
          <FluidTypography text={data.comment} />
          <h1>author{data.author}</h1>
        </Box>
      ))}
      <Box></Box>
    </Box>
  );
};

Reviews.propTypes = {};

export default Reviews;
