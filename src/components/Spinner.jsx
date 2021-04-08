import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

/**
 * Spinner - A wrapper for loader.
 * @param {boolean} visible - whether it will show or not the custom spinner.
 */

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(168, 184, 172, 0.3)',
    height: '107vh',
    width: '100vw',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
}));
const Spinner = ({ visible }) => {
  const classes = useStyles();

  return (
    visible && (
      <Loader
        className={classes.container}
        type='Puff'
        color='#00BFFF'
        height={100}
        width={100}
        visible={visible}
      />
    )
  );
};

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Spinner;
