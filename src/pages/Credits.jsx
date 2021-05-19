import { MainLayout } from 'layouts';
import { Typography } from '@material-ui/core';

const Credits = (props) => {
  return (
    <MainLayout>
      <Typography variant='h3'>
        Credits to: Anastasiia Shapoval for this beautiful design
      </Typography>
      <a href='https://www.behance.net/talinkapilla'>
        Visit her profile on Behance.
      </a>
    </MainLayout>
  );
};

export default Credits;
