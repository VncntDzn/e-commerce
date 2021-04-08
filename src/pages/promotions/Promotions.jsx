import {
  Typography,
  Box,
  Grid,
  Hidden,
  Button,
  makeStyles,
} from '@material-ui/core';
import customTheme from 'theme/customTheme';
import Discount from './assets/discount.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ecommBasics: {
    backgroundColor: customTheme.palette.secondary.light,
    margin: '1rem ',
  },
  ecommDeals: {
    backgroundColor: customTheme.palette.secondary.light,
    margin: '1rem',
  },
  fluid_header: {
    fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
    fontWeight: 500,
  },
  fluid_paragraph: {
    fontSize: '1rem',
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
    <Grid container className={classes.container} spacing={2}>
      <Grid item container className={classes.ecommBasics} sm={5} md={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Typography className={classes.fluid_header}>
            E-comm Basics
          </Typography>
          <Typography className={classes.fluid_paragraph}>
            Shop Today's Deals, Lightning Deals, and limited-time discounts
          </Typography>
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
      <Grid item container className={classes.ecommDeals} md={5} sm={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Typography className={classes.fluid_header}>
            Deals & Promotions
          </Typography>
          <Typography className={classes.fluid_paragraph}>
            Shop Today's Deals, Lightning Deals, and limited-time discounts
          </Typography>
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

Promotions.propTypes = {};

export default Promotions;
