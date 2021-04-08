import { Button, Box, Grid, Hidden, makeStyles } from '@material-ui/core';
import { FluidTypography } from 'components';
import customTheme from 'theme/customTheme';
import puppy from './assets/puppy.png';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: customTheme.palette.tertiary.light,
  },
  containerSlogan: {
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
  },
}));

const ShippingBanner = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction='row'>
      <Box
        display='flex'
        justifyContent='space-evenly'
        width='100vw'
        px={3}
        py={2}
        my={2}
        className={classes.container}
      >
        <Grid item className={classes.containerSlogan} md={6} lg={5}>
          <FluidTypography
            text='Discover E-comm'
            minSize='1rem'
            size='4vw'
            maxSize='1.4rem'
          />
          <FluidTypography
            text='E-COMM DELIVERS TO YOU'
            minSize='1.5rem'
            size='5vw'
            maxSize='3rem'
            color='black'
            fontWeight='500'
            variant='h1'
          />
          <FluidTypography
            text=' Worldwide shipping. We ship to over 100 countries and regions, right
            to your doorstep.'
            variant='h6'
          />
          <Box width={'100%'} mt={2}>
            <Button variant='outlined'>View More</Button>
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid lg={3} item md={6}>
            <img src={puppy} alt='Puppy inside a box' />
          </Grid>
        </Hidden>
      </Box>
    </Grid>
  );
};

ShippingBanner.propTypes = {};

export default ShippingBanner;
