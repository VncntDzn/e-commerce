import { Grid } from '@material-ui/core';
import UserDetails from './UserDetails';
import { MainLayout } from 'layouts';

const UserProfile = () => {
  return (
    <MainLayout>
      <Grid>
        <UserDetails />
        <h1>POSTS AND ACTIVITIES HERE</h1>
      </Grid>
    </MainLayout>
  );
};

export default UserProfile;
