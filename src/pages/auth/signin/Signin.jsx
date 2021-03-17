import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Box,
  Container,
} from '@material-ui/core';

import { Formik, Form } from 'formik';
import { signinSchema } from 'helpers';
import { Field } from 'components';
import PropTypes from 'prop-types';

const Signin = (props) => {
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
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={signinSchema}
            onSubmit={() => {
              alert('nice');
            }}
          >
            <Form>
              <Field name='email' type='email' placeholder='Email' />
              <Field name='password' placeholder='Password' type='password' />
              <Button
                color='primary'
                variant='contained'
                fullWidth
                type='submit'
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

Signin.propTypes = {};

export default Signin;
