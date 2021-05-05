import { MainLayout } from 'layouts';
import { Card, CardContent, Button, Box, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { forgotPasswordSchema, useDialog } from 'helpers';
import { Field, Spinner, CustomDialog } from 'components';
import { RESET_PASSWORD } from 'store/slices/authSlice';
import FailedAnimation from 'lottie/FailedAnimation';
import ForgotPasswordAnimation from 'lottie/ForgotPasswordAnimation';
import EmailSentAnimation from 'lottie/EmailSentAnimation';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: '75vh',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content',
    [theme.breakpoints.up('sm')]: {
      width: 'fit-content',
    },
  },
  buttonStyle: {
    color: 'white',
  },
}));
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ForgotPasswordAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const ForgotPassword = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const { visibility, data, closeModal } = useDialog({
    status,
    error,
    animationSuccess: EmailSentAnimation,
    animationFailed: FailedAnimation,
    successText: 'Email sent!',
  });

  const handleSubmission = ({ email }) => {
    dispatch(RESET_PASSWORD({ email }));
  };

  return (
    <MainLayout>
      <Box className={classes.container}>
        <Card raised className={classes.cardContainer}>
          <CardContent>
            <Lottie options={defaultOptions} height={200} width={200} />

            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={forgotPasswordSchema}
              onSubmit={({ email }) => handleSubmission({ email })}
            >
              <Form>
                <Field name='email' type='email' placeholder='Email' />
                <Box mt={1}>
                  <Button
                    className={classes.buttonStyle}
                    color='secondary'
                    variant='contained'
                    fullWidth
                    type='submit'
                  >
                    Submit
                  </Button>
                  <Button
                    color='secondary'
                    onClick={() => history.push('/auth/signin')}
                  >
                    Signin
                  </Button>
                </Box>
              </Form>
            </Formik>
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

export default ForgotPassword;
