import { useSelector } from 'react-redux';
import { MainLayout } from 'layouts';
import { useState } from 'react';
import {
  makeStyles,
  Tabs,
  Tab,
  Breadcrumbs,
  Hidden,
  Grid,
  Link,
  Typography,
  Card,
  Box,
  Button,
} from '@material-ui/core';
import { TabPanel } from 'components';
import ProductInformation from './tab-panels/ProductInformation';
import Reviews from './tab-panels/Reviews';
import PropTypes from 'prop-types';

import { Carousel } from 'react-responsive-carousel';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '0.5rem',
  },
}));
const SinglePost = ({ match }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { nanoID } = match.params;
  // MALI
  const product = useSelector((state) =>
    state.posts.userPosts.find((post) => post.data.nanoID === nanoID)
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link color='inherit' href='/'>
          Material-UI
        </Link>
        <Link color='inherit' href='/getting-started/installation/'>
          Core
        </Link>
        <Typography color='textPrimary'>Breadcrumb</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} className={classes.root}>
        <Hidden smDown>
          <Grid container item md={6} lg={6}>
            <TransformWrapper>
              <TransformComponent>
                <Carousel emulateTouch={true}>
                  {product.data.links.map((link, index) => (
                    <img key={index} src={link} alt='product' />
                  ))}
                </Carousel>
              </TransformComponent>
            </TransformWrapper>
          </Grid>
        </Hidden>
        <Grid container item md={6} lg={6}>
          <Card
            style={{
              height: 'fit-content',
              width: '100%',
              marginBottom: '1rem',
            }}
          >
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
          </Card>
          <TabPanel value={value} index={0}>
            <ProductInformation info={product.data} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Reviews />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

SinglePost.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SinglePost;
