import { useState, useEffect } from 'react';
import { Card, CardContent, Button, Box, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { signinSchema, useDialog } from 'helpers';
import { Field, FieldIcon, Spinner, CustomDialog } from 'components';
import { MainLayout } from 'layouts';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from 'store/slices/authSlice';
import customTheme from 'theme/customTheme';
import SignupSuccessAnimated from 'lottie/SignupSuccessAnimated';
import FailedAnimation from 'lottie/FailedAnimation';

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
const Signin = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const user = useSelector((state) => state.user);
  const [visible, setVisibility] = useState(false);
  const [dialog, setDialog] = useState({
    display: false,
    text: '',
    lottie: '',
  });

  const handleSubmission = (values) => {
    const { email, password } = values;
    dispatch(loginUser({ email, password }));
  };
  useEffect(() => {
    // check the status state and display the spinner and dialog
    if (status === 'pending') {
      setVisibility(true);
    } else if (status === 'success') {
      setVisibility(false);
      if (
        user === 'The password is invalid or the user does not have a password.'
      ) {
        // useDialog({display:true, text: 'sample text',})
        setDialog({
          display: true,
          text: user,
          lottie: FailedAnimation,
        });
        setTimeout(() => {
          setDialog({
            display: false,
          });
        }, 3000);
      } else {
        setDialog({
          display: true,
          text: 'Redirecting homepage...',
          lottie: SignupSuccessAnimated,
        });
        setTimeout(() => {
          setDialog({
            display: false,
          });
        }, 3000);
      }
    } else if (status === 'failed') {
      setVisibility(false);
      setDialog({
        display: true,
        text: 'Please try again...',
        lottie: FailedAnimation,
      });
      setTimeout(() => {
        setDialog({
          display: false,
        });
      }, 3000);
    }
  }, [status, history, user]);
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
              }}
              validationSchema={signinSchema}
              onSubmit={(values) => handleSubmission(values)}
            >
              <Form>
                <Field name='email' type='email' placeholder='Email' />
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
          </CardContent>
          <Box mx={1} display='flex' justifyContent='space-between'>
            <Button
              className={classes.buttonStyle}
              onClick={() => history.push('/auth/signup')}
            >
              Create Account?
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={() => history.push('/auth/forgot-password')}
            >
              Forgot Password?
            </Button>
          </Box>
        </Card>
        <CustomDialog
          dialog={dialog.display}
          lotti={dialog.lottie}
          text={dialog.text}
        />
      </Box>
    </MainLayout>
  );
};

Signin.propTypes = {};

export default Signin;
