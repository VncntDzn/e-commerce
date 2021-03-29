import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { TextField, Box } from '@material-ui/core';

const Field = ({ withIcon, ...props }) => {
  const [field, meta] = useField(props);
  return withIcon ? (
    <Box py={1}>
      <TextField fullWidth {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error' style={{ color: 'red' }}>
          {meta.error}
        </div>
      ) : null}
    </Box>
  ) : (
    <div></div>
  );
};

Field.propTypes = {};

export default Field;
