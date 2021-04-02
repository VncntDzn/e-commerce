import React from 'react';
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
  return (
    <MainLayout>
      <Box className={classes.container}>
        <Card raised className={classes.cardContainer}>
          <CardContent>
            <Lottie options={defaultOptions} height={200} width={200} />
            <TextField
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
            />
          </CardContent>
          <Box display='flex' justifyContent='center' mb={1}>
            <Button
              color='secondary'
              variant='contained'
              className={classes.buttonStyle}
            >
              Reset Password
            </Button>
          </Box>
        </Card>
      </Box>
    </MainLayout>
  );
};

export default ForgotPassword;
