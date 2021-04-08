import { Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

/**
 * A wrapper for Dialog of material ui with react-lottie animations added.
 * @param {boolean} [dialog] - whether to display or not the dialog.
 * @param {object / json} [lottie] - the file for the animation.
 * @param {string} [text] - the text that will be displayed to the dialog.
 */

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
          {text}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  dialog: PropTypes.bool.isRequired,
  lottie: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  text: PropTypes.string,
};

export default CustomDialog;
