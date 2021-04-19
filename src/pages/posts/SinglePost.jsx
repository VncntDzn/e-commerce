import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MainLayout } from 'layouts';
import { useState } from 'react';
import { makeStyles, Tabs, Tab, Box } from '@material-ui/core';
import { TabPanel } from 'components';
import UserPosts from '../posts/UserPosts';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const SinglePost = ({ match }) => {
  const { author } = match.params;
  const classes = useStyles();

  const [value, setValue] = useState(0);
  /*  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  ); */

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Box className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant='fullWidth'
          aria-label='full width tabs'
        >
          <Tab label='Product Information' />
          <Tab label='Reviews' />
          <Tab label='FAQ' />
        </Tabs>
        {/* <TabPanel value={value} index={0}>
          <CreatePostPanel />
          <UserPosts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
      </Box>
    </MainLayout>
  );
};

SinglePost.propTypes = {};

export default SinglePost;
