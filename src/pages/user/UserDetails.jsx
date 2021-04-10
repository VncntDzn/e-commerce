import { useState } from 'react';
import {
  Button,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import { TabPanel } from 'components';

const useStyles = makeStyles((theme) => ({
  details: {
    width: '95vw',
    [theme.breakpoints.up('sm')]: {
      width: '100vw',
    },
  },
}));
const UserDetails = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container item lg={4} xl={4}>
      <Grid
        container
        item
        xs={3}
        display='flex'
        alignItems='center'
        justify='center'
      >
        <Avatar>V</Avatar>
      </Grid>
      <Grid
        container
        item
        xs={9}
        sm={6}
        display='flex'
        justify='center'
        direction='column'
      >
        <Typography>Vincent Dizon</Typography>
        <Button className={classes.buttonStyle} variant='outlined'>
          EDIT PROFILE
        </Button>
      </Grid>
      <hr style={{ width: '88vw' }} />
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        textColor='secondary'
        variant='fullWidth'
        aria-label='full width tabs'
        centered
      >
        <Tab icon={<PostAddRoundedIcon />} label='55 posts' wrapped />
        <Tab icon={<PeopleAltRoundedIcon />} label='142 followers' />
        <Tab icon={<SupervisorAccountRoundedIcon />} label='552 following' />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <hr style={{ width: '88vw' }} />
    </Grid>
  );
};

export default UserDetails;
