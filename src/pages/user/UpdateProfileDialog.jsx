/**
 * UpdateProfileDialog - dialog for UserDetails when the user wants
 * to update his/ display name and picture.
 * @param {object} [user] - current user.
 * @param {Boolean} [open] - whether to open or not the dialog.
 * @param {function} [onClose] - callback to close the dialog component.
 */
import { useState } from 'react';
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  TextField,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'store/slices/userSlice';
import { firebaseStorage } from 'firebase/firebaseConfig';
import PropTypes from 'prop-types';

const UpdateProfileDialog = ({ user, open, onClose }) => {
  const [name, setName] = useState(null);
  const [link, setLink] = useState(null);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  const handleUpload = async (files) => {
    const storageRef = firebaseStorage.ref(`update-user/${user.email}`);
    let picture = files.target.files[0];
    try {
      let fileRef = storageRef.child(picture.name);
      await fileRef.put(picture);
      setLink(await fileRef.getDownloadURL());
      setDisable(false);
    } catch (e) {
      console.log(e);
    }
  };

  const updateProfileDetails = () => {
    dispatch(updateProfile({ name, link }));
  };

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby='simple-dialog-title'
      open={open}
      fullWidth
    >
      <Box p={2}>
        <TextField
          style={{ margin: 5 }}
          fullWidth
          variant='outlined'
          color='secondary'
          label='New Full Name'
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          style={{ margin: 5 }}
          fullWidth
          variant='outlined'
          color='secondary'
          type='file'
          inputProps={{ accept: 'image/*' }}
          onChange={handleUpload}
        />
      </Box>
      <DialogActions>
        <Button
          color='secondary'
          variant='outlined'
          onClick={updateProfileDetails}
          disabled={disable}
        >
          Update
        </Button>
        <Button variant='outlined' onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UpdateProfileDialog.propTypes = {
  user: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateProfileDialog;
