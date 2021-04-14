import React from 'react';
import PropTypes from 'prop-types';
import { Box, Dialog, DialogTitle, DialogContent } from '@material-ui/core';

const PostsDialog = ({ open, title, onClick, children }) => {
  return (
    <Dialog
      onClose={onClick}
      aria-labelledby='simple-dialog-title'
      open={open}
      fullWidth
    >
      <Box display='flex' justifyContent='center'>
        <DialogTitle id='simple-dialog-title'>{title}</DialogTitle>
      </Box>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

PostsDialog.propTypes = {};

export default PostsDialog;
