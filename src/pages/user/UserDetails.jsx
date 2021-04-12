import { useState } from 'react';
import {
  Button,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TabPanel } from 'components';
import { CreatePostPanel } from './tab-panels';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

const useStyles = makeStyles((theme) => ({
  details: {
    width: '94vw',
    [theme.breakpoints.up('sm')]: {},
  },
}));
const UserDetails = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(user);
  };

  return (
    <Grid
      className={classes.details}
      container
      item
      lg={4}
      xl={7}
      justify='center'
    >
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
        <Typography>{user.displayName}</Typography>
        <Box>
          <Button className={classes.buttonStyle} variant='outlined'>
            EDIT PROFILE
          </Button>
        </Box>
      </Grid>
      <hr style={{ width: '88vw' }} />
      <Box display='flex' flexDirection='column'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant='fullWidth'
          aria-label='full width tabs'
        >
          <Tab icon={<PostAddRoundedIcon />} label='55 posts' wrapped />
          <Tab icon={<PeopleAltRoundedIcon />} label='142 followers' />
          <Tab icon={<SupervisorAccountRoundedIcon />} label='552 following' />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CreatePostPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Grid>
  );
};

export default UserDetails;
