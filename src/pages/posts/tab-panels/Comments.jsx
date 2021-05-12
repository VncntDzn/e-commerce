/**
 * Comments Component - it displays the comments of the post.
 * Also you can do CRUD operations in this component.
 * @param {string} [docID] - document ID of the product.
 */
import { useEffect, useState } from 'react';
import {
  makeStyles,
  Box,
  Button,
  Avatar,
  Dialog,
  DialogContent,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_COMMENT } from 'store/slices/commentSlice';
import { firestore } from 'firebase/firebaseConfig';
import PropTypes from 'prop-types';
import FluidTypography from 'components/FluidTypography';
import CommentPanel from './CommentPanel';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  container: {
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
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));
const Comments = ({ docID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState({ id: null, email: null });
  const [editDialog, setEditDialog] = useState(false);
  const [comments, setComments] = useState(null);
  const currentUser = useSelector((state) => state.auth.user);

  const handleDeleteComment = () => {
    dispatch(DELETE_COMMENT({ commentID: data.id, docID }));
  };
  const handleClick = (event, id, { email }) => {
    setAnchorEl(event.currentTarget);
    setData({ id: id, email: email });
  };

  useEffect(() => {
    return firestore
      .collection('products')
      .doc(docID)
      .collection('comments')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        let commentsArray = [];
        snapshot.forEach((doc) =>
          commentsArray.push({ commentID: doc.id, commentData: doc.data() })
        );
        setComments(commentsArray);
      });
  }, [docID]);
  return (
    <>
      {readMore ? (
        <div>
          <Button onClick={() => setReadMore(!readMore)} color='secondary'>
            View {comments?.length} comments
          </Button>
        </div>
      ) : (
        <>
          {comments.map(({ commentData, commentID }) => (
            <>
              <Box
                display='flex'
                flexDirection='column'
                my={1}
                width={'fit-content'}
                height={'fit-content'}
                key={commentID}
              >
                <Box display='flex' alignItems='flex-start'>
                  <Avatar
                    className={classes.small}
                    src={commentData.commentorPhoto}
                  />
                  <Box
                    display='flex'
                    flexDirection='column'
                    flex={1}
                    style={{
                      background: '#E0E3E4',
                      borderRadius: '10px',
                      padding: '0 1rem',
                    }}
                  >
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <FluidTypography
                        minSize='0.9rem'
                        maxSize='0.9rem'
                        size='0.5rem'
                        text={commentData.displayName}
                      />
                      <IconButton
                        onClick={(event) =>
                          handleClick(event, commentID, {
                            email: commentData.email,
                          })
                        }
                        style={{ padding: 0, marginRight: '-1rem' }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </Box>

                    <FluidTypography text={commentData.comment} color='black' />
                  </Box>
                </Box>
              </Box>
            </>
          ))}
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {currentUser.email === data.email ? (
              <div>
                <MenuItem onClick={() => setEditDialog(true)}>Edit</MenuItem>
                <MenuItem onClick={() => handleDeleteComment()}>
                  Delete
                </MenuItem>
              </div>
            ) : (
              <MenuItem
                onClick={() => {
                  alert('NOT YET IMPLEMENTED');
                }}
              >
                Report
              </MenuItem>
            )}
          </Menu>

          <Dialog onClose={() => setEditDialog(!editDialog)} open={editDialog}>
            <DialogContent>
              <CommentPanel action='edit' docID={docID} commentID={data.id} />
            </DialogContent>
          </Dialog>
          <Button onClick={() => setReadMore(!readMore)} color='secondary'>
            Hide comments
          </Button>
        </>
      )}
    </>
  );
};

Comments.propTypes = {
  docID: PropTypes.string.isRequired,
};

export default Comments;
