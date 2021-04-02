import { useState, useEffect } from 'react';
import { MainLayout } from 'layouts';
import {
  Card,
  CardContent,
  Button,
  Box,
  makeStyles,
  TextField,
} from '@material-ui/core';
import ForgotPasswordAnimation from 'lottie/ForgotPasswordAnimation';
import Lottie from 'react-lottie';
import { Formik, Form } from 'formik';

import { useSelector, useDispatch } from 'react-redux';
import { forgotPasswordSchema } from 'helpers';
import { Field, Spinner, CustomDialog } from 'components';
import { resetPassword } from 'store/slices/authSlice';
import FailedAnimation from 'lottie/FailedAnimation';
import EmailSentAnimation from 'lottie/EmailSentAnimation';

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(false);
  const status = useSelector((state) => state.status);
  const forgotPassword = useSelector((state) => state.forgotPassword);

  const [dialog, setDialog] = useState({
    display: false,
    text: '',
    lottie: '',
  });

  const handleSubmission = ({ email }) => {
    dispatch(resetPassword({ email }));
  };
  useEffect(() => {
    // check the status state and display the spinner and dialog
    if (status === 'pending') {
      setVisibility(true);
    } else if (status === 'success') {
      setVisibility(false);
      if (forgotPassword !== 'Success!') {
        setDialog({
          display: true,
          text: forgotPassword,
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
          text: forgotPassword,
          lottie: EmailSentAnimation,
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
  }, [status, forgotPassword]);
  return (
    <MainLayout>
      <Box className={classes.container}>
        <Spinner visible={visible} />
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
                </Box>
              </Form>
            </Formik>
          </CardContent>
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

export default ForgotPassword;
