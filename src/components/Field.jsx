import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { TextField, Box } from '@material-ui/core';

/**
 * Field - a wrapper for material ui TextField with no icon.
 * Also it uses formik and yup for validations of the field.
 */

const Field = ({ withIcon, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Box mx={1}>
      <TextField fullWidth {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error' style={{ color: 'red' }}>
          {meta.error}
        </div>
      ) : null}
    </Box>
  );
};

Field.propTypes = {};

export default Field;
