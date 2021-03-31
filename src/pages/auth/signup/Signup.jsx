import { useState, useEffect } from 'react';
import { Card, CardContent, Button, Box, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { signupSchema } from 'helpers';
import { Field, FieldIcon, Spinner, CustomDialog } from 'components';
import { MainLayout } from 'layouts';
import { useHistory } from 'react-router-dom';
import customTheme from 'theme/customTheme';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from 'store/slices/authSlice';

import SignupSuccessAnimated from 'lottie/SignupSuccessAnimated';
import FailedAnimation from 'lottie/FailedAnimation';

const Signup = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [lotti, setLotti] = useState(null);
  const [text, setText] = useState(null);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      height: '75vh',
    },
    cardContainer: {
      width: '80vw',
      height: 'fit-content',
      [theme.breakpoints.up('sm')]: {
        width: '30rem',
      },
    },
    buttonStyle: {
      '&:hover': {
        color: customTheme.palette.secondary.main,
      },
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const handleSubmission = (values) => {
    const { email, password, firstName, lastName } = values;
    dispatch(registerUser({ email, password }));
  };

  useEffect(() => {
    // check the status state and display the spinner
    if (status === 'pending') {
      setVisibility(true);
    } else if (status === 'success') {
      if (error !== 'Success!') {
        setVisibility(false);
        setDialog(true);
        setLotti(FailedAnimation);
        setText(error);

        setTimeout(() => {
          setDialog(false);
        }, 3000);
      } else {
        setVisibility(false);
        setDialog(true);
        setLotti(SignupSuccessAnimated);
        setText('Redirecting to signin page...');

        setTimeout(() => {
          setDialog(false);
          history.push('/auth/signin');
        }, 3000);
      }
    } else if (status === 'failed') {
      setVisibility(false);
      setDialog(true);
      setLotti(FailedAnimation);
      setText('Please try again...');
      setTimeout(() => {
        setDialog(false);
      }, 3000);
    }
  }, [status, history, error]);

  return (
    <MainLayout>
      <Box className={classes.container}>
        <Spinner visible={visible} />
        <Card raised className={classes.cardContainer}>
          <CardContent>
            <Formik
              initialValues={{
                email: '',
                password: '',
                firstName: '',
                lastName: '',
              }}
              validationSchema={signupSchema}
              onSubmit={(values, actions) => handleSubmission(values)}
            >
              <Form>
                <Field name='email' type='email' placeholder='Email' />
                <Field name='firstName' placeholder='First Name' />
                <Field name='lastName' placeholder='Last Name' />
                <FieldIcon name='password' placeholder='Password' />
                <Box mt={3}>
                  <Button
                    color='secondary'
                    variant='contained'
                    fullWidth
                    type='submit'
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            </Formik>
            <Button
              className={classes.buttonStyle}
              to='/auth/signin'
              onClick={() => history.push('/auth/signin')}
            >
              Already have an account?
            </Button>
          </CardContent>
        </Card>
        <CustomDialog dialog={dialog} lotti={lotti} text={text} />
      </Box>
    </MainLayout>
  );
};

Signup.propTypes = {};

export default Signup;
