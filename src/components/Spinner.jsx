import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = (props) => {
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
    },
  }));

  const classes = useStyles();
  return (
    <Loader
      className={classes.container}
      type='Puff'
      color='#00BFFF'
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

Spinner.propTypes = {};

export default Spinner;
