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
const Signin = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  const { visibility, data } = useDialog({
    status,
    error,
    animationSuccess: SignupSuccessAnimated,
    animationFailed: FailedAnimation,
    successText: 'Success! Redirecting you to homepage.',
    location: '/profile',
  });
  const handleSubmission = (values) => {
    const { email, password } = values;
    dispatch(loginUser({ email, password }));
  };

  return (
    <MainLayout>
      <Box className={classes.container}>
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
        <Spinner visible={visibility} />
        <CustomDialog
          dialog={data.show}
          lottie={data.lottie}
          text={data.text}
        />
      </Box>
    </MainLayout>
  );
};

export default Signin;
