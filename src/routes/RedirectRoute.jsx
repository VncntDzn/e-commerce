import { MainLayout } from 'layouts';
import { makeStyles, Grid, Button, Box, Typography } from '@material-ui/core';
import { FluidTypography } from 'components';
import { useHistory } from 'react-router-dom';
import ForbiddenAnimation from 'lottie/ForbiddenAnimation';
import customTheme from 'theme/customTheme';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    height: '75vh',
  },
  buttonStyle: {
    color: customTheme.palette.secondary.main,
  },
}));
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: ForbiddenAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const ForgotPassword = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const handleRedirect = () => {
    history.push('/auth/signin');
  };

  return (
    <MainLayout>
      <Box className={classes.container}>
        <Lottie options={defaultOptions} height={400} width={400} />
        <Box display='flex' flexDirection='column' my={1}>
          <FluidTypography text='Get access to this page.' />
          <Button className={classes.buttonStyle} onClick={handleRedirect}>
            <Typography variant='h5'>Sign in</Typography>
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ForgotPassword;
