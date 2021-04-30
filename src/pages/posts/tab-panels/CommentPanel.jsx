import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CardActions, TextField } from '@material-ui/core';
import { addComment, updateComment } from 'store/slices/commentSlice';
import { useDispatch, useSelector } from 'react-redux';

const CommentPanel = ({ docID, commentID, action = 'add' }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(null);
  const user = useSelector((state) => state.auth.user);

  const handleCommentReply = () => {
    if (action === 'edit') {
      dispatch(
        updateComment({
          comment,
          docID,
          commentID,
        })
      );
    } else {
      dispatch(
        addComment({
          comment,
          docID,
          email: user.email,
          displayName: user.displayName,
          commentorPhoto: user.photoURL,
        })
      );
    }
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

CommentPanel.propTypes = {
  docID: PropTypes.number.isRequired,
};

export default CommentPanel;
