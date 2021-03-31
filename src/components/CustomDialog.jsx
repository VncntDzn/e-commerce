import { useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { Dialog, DialogContent, DialogContentText } from '@material-ui/core';

const CustomDialog = ({ dialog, lotti, text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
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
          {dialog}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {};

export default CustomDialog;
