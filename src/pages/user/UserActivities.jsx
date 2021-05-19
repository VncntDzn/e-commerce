/* UserActivities component shows the tab which contains POST, FOLLOWERS AND FOLLOWING COMPONENTS.
 * @param {string} [email] - the email of the chosen user.
 */
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
import { useFetchPosts, usePeople, useFollowActions } from 'helpers';
import { ProductPanel } from 'components';
import UserPosts from '../posts/UserPosts';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import PeopleDetails from 'pages/follow/PeopleDetails';
import Followers from 'pages/follow/Followers';

const useStyles = makeStyles((theme) => ({
  tabPanelContainer: {
    [theme.breakpoints.up('md')]: {
      width: '50vw',
      marginLeft: '4rem',
    },
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
}));
const UserActivities = ({ email }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const [value, setValue] = useState(0);
  const { allPosts } = useFetchPosts({
    compareTo: null,
    compareFrom: null,
  });
  // Get the documentID of the chosen user.
  const { documentArray } = usePeople(email);
  const { following } = useFollowActions(documentArray[0]?.docID);

  // Get the unique names of the following.
  let uniqueNames = [];
  following.filter(({ data }) =>
    uniqueNames.includes(data.following)
      ? null
      : uniqueNames.push(data.following)
  );
  // Get the user's post accordingly.
  let userPosts = [];
  allPosts.map(({ data }) => {
    if (user.email === data.author) {
      userPosts.push(data);
    } else if (email === data.author) {
      userPosts.push(data);
    }
    return userPosts;
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  // check the pixel and change to horizontal or vertical orientation
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
        <Tab
          icon={<PostAddRoundedIcon />}
          label={`${userPosts?.length} post/s`}
        />
        <Tab icon={<PeopleAltRoundedIcon />} label='142 followers' />
        <Tab
          icon={<SupervisorAccountRoundedIcon />}
          label={`${uniqueNames?.length} following`}
        />
      </Tabs>

      <TabPanel value={value} index={0} style={{ width: '100%' }}>
        <Box className={classes.tabPanelContainer}>
          {user.email === email && <ProductPanel user={user} action='add' />}
          <UserPosts email={email} user={user} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ width: '100%' }}>
        <Followers />
      </TabPanel>
      <TabPanel value={value} index={2} style={{ width: '100%' }}>
        <PeopleDetails action='following' data={uniqueNames} />
      </TabPanel>
    </Box>
  );
};

export default UserActivities;
