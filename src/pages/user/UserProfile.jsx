import { makeStyles, Container } from '@material-ui/core';
import { MainLayout } from 'layouts';
import UserActivities from './UserActivities';
import UserDetails from './UserDetails';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      width: '80vw',
    },
  },
}));
const UserProfile = ({ match }) => {
  const classes = useStyles();
  const { email } = match.params;
  return (
    <MainLayout>
      <Container className={classes.container}>
        <UserDetails email={email} />
        <hr style={{ width: '100%' }} />
        <UserActivities email={email} />
      </Container>
    </MainLayout>
  );
};

export default UserProfile;
