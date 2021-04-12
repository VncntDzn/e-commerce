import { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';

const CreatePostPanel = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleCreatePost = () => {
    setOpen(!open);
    console.log(user);
  };
  return (
    <Grid>
      <Card raised>
        <CardContent>
          <TextField
            label={`What do you want to sell, ${user.displayName}?`}
            onClick={() => setOpen(true)}
            color='secondary'
            fullWidth
            autoFocus
            variant='filled'
          />
        </CardContent>
      </Card>
      <Box my={1}>
        <Card>
          <CardContent>
            <Typography>Content Here</Typography>
          </CardContent>
        </Card>
      </Box>
      <Dialog
        onClose={handleCreatePost}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <Box display='flex' justifyContent='center'>
          <DialogTitle id='simple-dialog-title'>Create Post</DialogTitle>
        </Box>
        <DialogContent>
          <TextField
            label={`Sell here ${user.displayName}`}
            color='secondary'
            fullWidth
            autoFocus
            variant='filled'
            multiline
          />
          <IconButton>
            <PhotoIcon />
          </IconButton>
          <DialogActions>
            <Button variant='outlined' onClick={handleCreatePost}>
              Cancel
            </Button>
            <Button variant='outlined' color='secondary'>
              Post
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

CreatePostPanel.propTypes = {};

export default CreatePostPanel;
