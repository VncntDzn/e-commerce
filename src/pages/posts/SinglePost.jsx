import { useSelector } from 'react-redux';
import { MainLayout } from 'layouts';
import { useState } from 'react';
import { makeStyles, Tabs, Tab, Box } from '@material-ui/core';
import { TabPanel } from 'components';
import ProductInformation from './tab-panels/ProductInformation';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const SinglePost = ({ match }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { nanoID } = match.params;
  const product = useSelector((state) =>
    state.posts.userPosts.find((post) => post.nanoID === nanoID)
  );

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
        <TabPanel value={value} index={0}>
          <ProductInformation info={product} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </MainLayout>
  );
};

SinglePost.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SinglePost;
