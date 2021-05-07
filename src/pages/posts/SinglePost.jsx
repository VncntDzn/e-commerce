/**
 * SinglePost Page - the component when the user clicked the view button.
 * @param {object} [match] - the url data.
 */
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
} from '@material-ui/core';
import { TabPanel } from 'components';
import { Carousel } from 'react-responsive-carousel';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import FAQ from './tab-panels/FAQ';
import ProductInformation from './tab-panels/ProductInformation';
import Reviews from './tab-panels/Reviews';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '0.5rem',
    position: 'relative',
  },
}));
const SinglePost = ({ match }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { docID } = match.params;
  const products = useSelector((state) =>
    state.posts.products.filter((params) => docID === params.docID)
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link color='inherit'>Categories</Link>
        <Typography color='textPrimary'>
          {products[0].data.categories}
        </Typography>
      </Breadcrumbs>
      <Grid container spacing={2} className={classes.root} justify='flex-end'>
        <Hidden smDown>
          <Box
            position='absolute'
            style={{
              height: 'fit-content',
              width: '35vw',
              top: '5%',
              left: '5%',
            }}
          >
            <TransformWrapper>
              <TransformComponent>
                <Carousel emulateTouch={true}>
                  {products[0].data.links.map((link, index) => (
                    <img key={index} src={link} alt='product' />
                  ))}
                </Carousel>
              </TransformComponent>
            </TransformWrapper>
          </Box>
        </Hidden>
        <Grid container item sm={12} md={6} lg={6}>
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
            <ProductInformation info={products[0].data} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Reviews
              userEmail={products[0].data.author}
              docID={products[0].docID}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FAQ />
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
