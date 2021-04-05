import { useState } from 'react';

/**  A custom hook that displays a dialog, animated svg and message.
 * @param {Boolean} [display = false] - whether to display the dialog or not.
 * @param {string} [text] - a message to display for the dialog.
 * @param {JSON} [lottie] - the json file that contains the animation.
 * @param {number} [time = 3000] - count when to hide the dialog.
 */

const useDialog = ({ display = false, text, lottie, time = 3000 }) => {
  const [dialog, setDialog] = useState({ display, text, lottie, time });

  setDialog({
    display: true,
    text: 'Redirecting to signin page...',
    lottie: lottie,
  });
  setTimeout(() => {
    setDialog({
      display: false,
    });
  }, 3000);

  return dialog;
};
export default useDialog;
