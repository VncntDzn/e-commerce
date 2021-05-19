import { Box, Grid, Hidden, Button, makeStyles } from '@material-ui/core';
import { FluidTypography } from 'components';
import customTheme from 'theme/customTheme';
import Discount from './assets/discount.png';

const useStyles = makeStyles((theme) => ({
  ecomm: {
    backgroundColor: customTheme.palette.secondary.light,
    margin: '1rem ',
  },
  image: {
    objectFit: 'contain',
    height: '10rem',
    width: '10rem',
  },
}));
const Promotions = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify='space-between' spacing={2}>
      <Grid item container className={classes.ecomm} sm={5} md={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <FluidTypography
            text='E-comm Basics'
            minSize='1.1rem'
            size='1.5rem'
            maxSize='3rem'
            fontWeight={500}
          />

          <FluidTypography
            text={`Shop Today's Deals, Lightning Deals, and limited-time discounts`}
            minSize='1rem'
            size='1.2rem'
            maxSize='1rem'
          />
          <Box>
            <Button variant='outlined' style={{ marginTop: '1rem' }}>
              See More ⟶
            </Button>
          </Box>
        </Box>
        <Hidden lgDown>
          <Box>
            <img className={classes.image} alt='Discount' src={Discount} />
          </Box>
        </Hidden>
      </Grid>
      <Grid item container className={classes.ecomm} md={5} sm={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <FluidTypography
            text='Deals & Promotions'
            minSize='1.1rem'
            size='1.5rem'
            maxSize='3rem'
            fontWeight={500}
          />
          <FluidTypography
            text={`Shop Today's Deals, Lightning Deals, and limited-time discounts`}
            minSize='1rem'
            size='1.2rem'
            maxSize='1rem'
          />
          <Box>
            <Button variant='outlined' style={{ marginTop: '1rem' }}>
              See More ⟶
            </Button>
          </Box>
        </Box>
        <Hidden lgDown>
          <Box>
            <img className={classes.image} alt='Discount' src={Discount} />
          </Box>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Promotions;
