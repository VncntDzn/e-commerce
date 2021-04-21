import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

/**  A custom hook that displays a dialog, animated svg and message.
 * @param {string} [error] - whether the status has error or not.
 * @param {string} [status] - status of the process passed from the parent component.
 * @param {JSON} [animationSuccess] - the json file that contains the success animation.
 * @param {JSON} [animationFailed] - the json file that contains the failed animation.
 * @param {string} [successText] - the text will be displayed if no error has occur.
 * @param {string} [location] - the path that will be redirected.
 
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

  const closeModal = () => {
    setData({ show: false });
  };
  useEffect(() => {
    if (status === 'pending') {
      setVisibility(true);
      console.log(status);
    } else if (status === 'success') {
      console.log(status);
      setVisibility(false);
      setData({
        show: true,
        text: successText,
        lottie: animationSuccess,
      });
    } else if (status === 'failed') {
      setVisibility(false);
      setData({ show: true, text: error, lottie: animationFailed });
    }
  }, [
    status,
    error,
    successText,
    animationSuccess,
    animationFailed,
    visibility,
  ]);

  return { visibility, data, closeModal };
};

export default useDialog;
