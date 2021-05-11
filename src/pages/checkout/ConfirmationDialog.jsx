import {
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';

const ConfirmationDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm your order</DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {};

export default ConfirmationDialog;
