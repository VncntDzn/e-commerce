import { Grid, makeStyles } from '@material-ui/core';
import { MainLayout } from 'layouts';
import UserActivities from './UserActivities';
import UserDetails from './UserDetails';

const useStyles = makeStyles((theme) => ({
  container: {
    /*  border: '3px solid red', */
  },
}));
const UserProfile = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Grid className={classes.container} container>
        <UserDetails />
        {/*  <UserActivities /> */}
      </Grid>
    </MainLayout>
  );
};

export default UserProfile;
