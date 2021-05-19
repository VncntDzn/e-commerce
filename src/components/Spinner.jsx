/**
 * Spinner - A wrapper for loader.
 * @param {boolean} visible - whether it will show or not the custom spinner.
 */

import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(168, 184, 172, 0.4)',
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
        type='BallTriangle'
        color='#FCAF18'
        height={100}
        width={100}
        visible={true}
      />
    )
  );
};

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Spinner;
