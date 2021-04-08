import { MainLayout } from 'layouts';
import { Box, Typography } from '@material-ui/core';
import Lottie from 'react-lottie';
import NotFoundAnimation from 'lottie/NotFoundAnimation';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const NotFound = () => {
  return (
    <MainLayout>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography variant='h4'>Not Found</Typography>
        <Lottie options={defaultOptions} height={'80vh'} width={'90vw'} />
      </Box>
    </MainLayout>
  );
};

export default NotFound;
