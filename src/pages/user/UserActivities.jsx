import { useState } from 'react';
import { makeStyles, Tabs, Tab, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TabPanel } from 'components';
import { CreatePostPanel, Posts } from './tab-panels';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100vw',
    border: '3px solid red',
  },
});
const UserActivities = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.tabsContainer}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        textColor='secondary'
        variant='fullWidth'
        aria-label='full width tabs'
      >
        <Tab icon={<PostAddRoundedIcon />} label='55 posts' />
        <Tab icon={<PeopleAltRoundedIcon />} label='142 followers' />
        <Tab icon={<SupervisorAccountRoundedIcon />} label='552 following' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CreatePostPanel user={user} />
        <Posts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

UserActivities.propTypes = {};

export default UserActivities;
