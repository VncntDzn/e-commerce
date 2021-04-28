import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CardActions, TextField } from '@material-ui/core';
import { addComment } from 'store/slices/commentSlice';
import { useDispatch, useSelector } from 'react-redux';

const CommentPanel = ({ docID }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(null);
  const author = useSelector((state) => state.auth.displayName);

  const handleCommentReply = () => {
    dispatch(addComment({ author, comment, docID }));
  };
  return (
    <>
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
    </>
  );
};

CommentPanel.propTypes = {};

export default CommentPanel;
