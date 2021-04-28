import { useState } from 'react';
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories, retrieveCategories } from 'store/slices/utilsSlice';
import { useDialog } from 'helpers';
import { Spinner, CustomDialog } from 'components';
import PropTypes from 'prop-types';
import SuccessAnimation from 'lottie/SuccessAnimation';
import FailedAnimation from 'lottie/FailedAnimation';

const AddCategoryDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const status = useSelector((state) => state.utils.categoryStatus);
  const error = useSelector((state) => state.utils.error);

  const { visibility, data, closeModal } = useDialog({
    status,
    error,
    animationSuccess: SuccessAnimation,
    animationFailed: FailedAnimation,
    successText: 'Success!',
  });

  const submitCategories = () => {
    // convert string into array and removed whitespace
    let trimmedString = [];
    categories
      .split(',')
      .map((s) => trimmedString.push({ label: s.trim(), value: s.trim() }));

    dispatch(addCategories({ categories: trimmedString }));
  };
  return (
    <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open}>
      <Button onClick={() => console.log(dispatch(retrieveCategories()))}>
        SAD
      </Button>
      <DialogTitle id='simple-dialog-title'>Add Category</DialogTitle>
      <DialogContent>
        <TextField
          label='Separate categories by comma'
          placeholder='Type here...'
          color='secondary'
          variant='outlined'
          onChange={(e) => setCategories(e.target.value)}
        />
        <Box display='flex' justifyContent='flex-end' pt={1}>
          <Button
            variant='contained'
            color='secondary'
            onClick={submitCategories}
            style={{ color: 'white' }}
          >
            Add
          </Button>
        </Box>
      </DialogContent>
      <Spinner visible={visibility} />
      <CustomDialog
        dialog={data.show}
        lottie={data.lottie}
        text={data.text}
        onClose={closeModal}
      />
    </Dialog>
  );
};

AddCategoryDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddCategoryDialog;
