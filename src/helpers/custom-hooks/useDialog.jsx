import { useEffect, useState } from 'react';

/**  A custom hook that displays a dialog, animated svg and message.
 * @param {string} [error] - whether the status has error or not.
 * @param {string} [status] - status of the process passed from the parent component.
 * @param {JSON} [animationSuccess] - the json file that contains the success animation.
 * @param {JSON} [animationFailed] - the json file that contains the failed animation.
 * @param {string} [successText] - the text will be displayed if no error has occur.
 */

const useDialog = (...props) => {
  const {
    status,
    error,
    animationSuccess,
    animationFailed,
    successText,
  } = props[0];
  const [visibility, setVisibility] = useState(false);
  const [data, setData] = useState({ show: false, text: '', lottie: '' });

  useEffect(() => {
    if (status === 'pending') {
      setVisibility(true);
    } else if (status === 'success') {
      setVisibility(false);
      if (error) {
        setData({ show: true, text: error, lottie: animationFailed });
      } else {
        setData({
          show: true,
          text: successText,
          lottie: animationSuccess,
        });
      }
    } else {
      setVisibility(false);
    }

    setTimeout(() => {
      setData({ show: false });
    }, 4000);
  }, [status, error, animationSuccess, animationFailed, successText]);

  return { visibility, data };
};

export default useDialog;
