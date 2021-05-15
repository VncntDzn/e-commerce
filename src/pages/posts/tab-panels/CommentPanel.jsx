/**
 * CommentPanel - the text field for the Reviews Page.
 * @param {string} [docID] - document ID of the product.
 * @param {string} [commentID] - document ID of the comment.
 * @param {string} [action] - whether to add or edit a comment.
 */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CardActions, TextField } from '@material-ui/core';
import { ADD_COMMENT, EDIT_COMMENT } from 'store/slices/commentSlice';
import { useDispatch, useSelector } from 'react-redux';

const CommentPanel = ({ docID, commentID, prevComment, action = 'add' }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(prevComment);
  const user = useSelector((state) => state.auth.user);

  const handleCommentReply = (e) => {
    e.preventDefault();

    if (action === 'edit') {
      dispatch(
        EDIT_COMMENT({
          comment,
          docID,
          commentID,
        })
      );
    } else {
      dispatch(
        ADD_COMMENT({
          comment,
          docID,
          email: user.email,
          displayName: user.displayName,
          commentorPhoto: user.photoURL,
        })
      );
    }
    setComment('');
  };
  return (
    <form onSubmit={(e) => handleCommentReply(e)}>
      <TextField
        fullWidth
        label='Add a review'
        type='text'
        variant='outlined'
        color='secondary'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <Box display='flex' justifyContent='flex-end' alignItems='flex-end'>
        <CardActions>
          <Button
            type='onsubmit'
            variant='contained'
            color='secondary'
            style={{ color: 'white' }}
          >
            Reply
          </Button>
        </CardActions>
      </Box>
    </form>
  );
};

CommentPanel.propTypes = {
  docID: PropTypes.string.isRequired,
  commentID: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default CommentPanel;
