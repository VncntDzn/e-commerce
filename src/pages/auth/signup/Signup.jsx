import { Card, CardContent, Button, Box, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { signupSchema, useDialog } from 'helpers';
import { Field, FieldIcon, Spinner, CustomDialog } from 'components';
import { MainLayout } from 'layouts';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { REGISTER_USER } from 'store/slices/authSlice';
import SignupSuccessAnimated from 'lottie/SignupSuccessAnimated';
import FailedAnimation from 'lottie/FailedAnimation';
import customTheme from 'theme/customTheme';

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

const Signup = (props) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const classes = useStyles();
  const history = useHistory();

  const { visibility, data, closeModal } = useDialog({
    status,
    error,
    animationSuccess: SignupSuccessAnimated,
    animationFailed: FailedAnimation,
    successText: 'You are now registered with e-comm!',
    location: '/profile',
  });

  const handleSubmission = (values) => {
    const { email, password, displayName } = values;
    let photoURL = '../../user/assets/keanu.jpg';
    dispatch(REGISTER_USER({ email, password, displayName, photoURL }));
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
                displayName: '',
              }}
              validationSchema={signupSchema}
              onSubmit={(values, actions) => handleSubmission(values)}
            >
              <Form>
                <Field name='email' type='email' placeholder='Email' />
                <Field name='displayName' placeholder='Full Name' />
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
        {/* COMPONENTS */}
        <Spinner visible={visibility} />
        <CustomDialog
          dialog={data.show}
          lottie={data.lottie}
          text={data.text}
          onClose={closeModal}
        />
      </Box>
    </MainLayout>
  );
};

Signup.propTypes = {};

export default Signup;
