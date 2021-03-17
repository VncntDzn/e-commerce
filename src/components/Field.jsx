import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';

const Field = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField fullWidth {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

Field.propTypes = {};

export default Field;
