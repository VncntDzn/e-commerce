import { makeStyles, Container } from '@material-ui/core';
import { MainLayout } from 'layouts';
import UserActivities from './UserActivities';
import UserDetails from './UserDetails';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      width: '40vw',
    },
  },
}));
const UserProfile = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container className={classes.container}>
        <UserDetails />
        <hr style={{ width: '100%' }} />
        <UserActivities />
      </Container>
    </MainLayout>
  );
};

export default UserProfile;
