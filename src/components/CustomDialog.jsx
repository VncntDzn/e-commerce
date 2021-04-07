import {
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
} from '@material-ui/core';
import Lottie from 'react-lottie';

const CustomDialog = ({ dialog, lottie, text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Dialog
      open={dialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>
        <Lottie options={defaultOptions} height={150} width={150} />
        <DialogContentText id='alert-dialog-description'>
          <Typography align='center'>{text}</Typography>
          {dialog}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {};

export default CustomDialog;
