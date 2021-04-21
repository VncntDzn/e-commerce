import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
} from '@material-ui/core';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import { useEffect } from 'react';
/**
 * A wrapper for Dialog of material ui with react-lottie animations added.
 * @param {boolean} [dialog] - whether to display or not the dialog.
 * @param {object / json} [lottie] - the file for the animation.
 * @param {string} [text] - the text that will be displayed to the dialog.
 */

const CustomDialog = ({ dialog, lottie, text, onClose }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      {dialog && (
        <Dialog
          open={dialog}
          onClose={onClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogContent>
            <Box display='flex' alignItems='center' justifyContent='flex-end'>
              <IconButton onClick={onClose}>
                <CancelIcon />
              </IconButton>
            </Box>

            <Lottie options={defaultOptions} height={150} width={150} />
            <DialogContentText id='alert-dialog-description'>
              {text}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </>
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
