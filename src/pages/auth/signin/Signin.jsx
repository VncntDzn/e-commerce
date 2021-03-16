import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Box,
  Container,
} from '@material-ui/core';
import { signinSchema } from 'helpers';
import PropTypes from 'prop-types';

const Signin = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      pt='5rem'
      px={2}
      justifyContent='center'
      alignContent='center'
      alignSelf='center'
    >
      <Card raised>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              name='password'
              label='Password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color='primary' variant='contained' fullWidth type='submit'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

Signin.propTypes = {};

export default Signin;
