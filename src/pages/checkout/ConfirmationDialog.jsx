import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';
import Lottie from 'react-lottie';
import DeliveryAnimation from 'lottie/DeliveryAnimation';
import { FluidTypography } from 'components';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: DeliveryAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const ConfirmationDialog = ({ open, onClose, paymentMethod }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Your chosen payment method: &nbsp;
        <Button color='secondary'>{paymentMethod}</Button>
      </DialogTitle>
      <DialogContent>
        <FluidTypography text='Our driver is on the way!' />
        <Lottie options={defaultOptions} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {};

export default ConfirmationDialog;
