import { useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  Box,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from 'store/slices/utilsSlice';
import PropTypes from 'prop-types';

const AddCategoryDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const submitCategories = () => {
    // convert string into array and removed whitespace
    let trimmedString = [];
    categories.split(',').map((s) => trimmedString.push(s.trim()));
    dispatch(addCategories({ categories }));
  };
  return (
    <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle id='simple-dialog-title'>Add Category</DialogTitle>
      <DialogContent>
        <TextField
          label='New Category'
          placeholder='Separate categories by comma'
          color='secondary'
          variant='outlined'
          onChange={(e) => setCategories(e.target.value)}
        />
        <Box display='flex' justifyContent='flex-end' pt={1}>
          <Button
            variant='outlined'
            color='secondary'
            onClick={submitCategories}
          >
            Add Category
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

AddCategoryDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddCategoryDialog;
