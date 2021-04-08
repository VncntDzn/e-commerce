import { MainLayout } from 'layouts';
import { Typography, Box, Grid, makeStyles } from '@material-ui/core';
import ShippingMethod from './ShippingMethod';
import PaymentMethod from './PaymentMethod';
import ItemsList from './ItemsList';

/* 
  This is the main file for the payment functional component.
  ItemsList is the file that lists the selected item of the user.
  ShippingMethod is the file that lets user decide for type of shipment .
  PaymentMethod is the file  that lets user decide for payment mode.
*/
const useStyles = makeStyles((theme) => ({
  fluid_header: {
    fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
    fontWeight: 500,
  },
}));
const PaymentMain = (props) => {
  const classes = useStyles();
  return (
    <MainLayout
      children={
        <>
          <Typography className={classes.fluid_header} variant='h1'>
            Shopping Cart
          </Typography>
          <Grid container>
            <Grid item sm={12} xs={12} md={7} lg={8}>
              <ItemsList />
              <Box>
                <ShippingMethod />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={4}>
              <PaymentMethod />
            </Grid>
          </Grid>
        </>
      }
    />
  );
};

PaymentMain.propTypes = {};

export default PaymentMain;
