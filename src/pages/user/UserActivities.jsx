import { useState } from 'react';
import {
  makeStyles,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TabPanel } from 'components';
import { CreatePostPanel } from './tab-panels';
import UserPosts from '../posts/UserPosts';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
}));
const UserActivities = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  let orientation;
  if (matches) {
    orientation = 'vertical';
  } else {
    orientation = 'horizontal';
  }

  return (
    <Box className={classes.tabsContainer}>
      <Tabs
        value={value}
        centered
        onChange={handleChange}
        indicatorColor='secondary'
        textColor='secondary'
        variant='fullWidth'
        orientation={orientation}
        style={{ width: 'fit-content' }}
      >
        <Tab icon={<PostAddRoundedIcon />} label='55 posts' />
        <Tab icon={<PeopleAltRoundedIcon />} label='142 followers' />
        <Tab icon={<SupervisorAccountRoundedIcon />} label='552 following' />
      </Tabs>

      <TabPanel value={value} index={0} style={{ width: '100%' }}>
        <CreatePostPanel user={user} />
        <UserPosts email={user.email} />
      </TabPanel>
      <TabPanel value={value} index={1} style={{ width: '100%' }}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} style={{ width: '100%' }}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default UserActivities;
