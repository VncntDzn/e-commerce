import { Grid, makeStyles, Box } from '@material-ui/core';
import { MainLayout } from 'layouts';
import UserActivities from './UserActivities';
import UserDetails from './UserDetails';

const useStyles = makeStyles((theme) => ({
  container: {},
}));
const UserProfile = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Grid className={classes.container} container>
        <Box display='flex' justifyContent='center'>
          <UserDetails />
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default UserProfile;
