import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { useField } from 'formik';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/**
 * FieldIcon - a wrapper for material ui TextField with icon.
 * Also it uses formik and yup for validations of the field.
 */

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '95%',
  },
}));

const FieldIcon = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [field, meta] = useField(props);

  return (
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
      <Input
        fullWidth
        id='standard-adornment-password'
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        {...field}
        {...props}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {meta.touched && meta.error ? (
        <div className='error' style={{ color: 'red' }}>
          {meta.error}
        </div>
      ) : null}
    </FormControl>
  );
};

export default FieldIcon;
