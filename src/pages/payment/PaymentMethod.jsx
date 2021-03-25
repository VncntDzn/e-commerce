import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Hidden,
  Button,
  Grid,
} from '@material-ui/core';

import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';

const PaymentMethod = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const useStyles = makeStyles((theme) => ({
    fluid_paragraph: {
      fontSize: 'clamp(0.9rem, 3vw, 1.3rem)',
      fontWeight: 500,
      color: 'grey',
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.fluid_paragraph}
        variant='subtitle1'
        style={{ color: 'black', fontWeight: 600 }}
      >
        Tomas, last step remained!
      </Typography>
      <Grid container style={{ marginBottom: '5rem' }}>
        <Grid
          container
          item
          direction='column'
          xs={6}
          justify='center'
          alignItems='center'
        >
          <FormControl component='fieldset'>
            <Typography
              className={classes.fluid_paragraph}
              variant='subtitle1'
              style={{ color: 'gray', fontWeight: 400, textIndent: '1rem' }}
            >
              Payment method
            </Typography>
            <RadioGroup
              aria-label='gender'
              name='gender1'
              value={1}
              onChange={handleChange}
            >
              <FormControlLabel
                value='female'
                control={
                  <>
                    <Radio />
                    <CreditCardOutlinedIcon />
                  </>
                }
                label='Credit Card'
              />
              <FormControlLabel
                value='female'
                control={
                  <>
                    <Radio />
                    <CreditCardOutlinedIcon />
                  </>
                }
                label='E-comm Card'
              />
              <FormControlLabel
                value='male'
                control={
                  <>
                    <Radio />
                    <LocalAtmOutlinedIcon />
                  </>
                }
                label='Cash on Delivery'
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid container item direction='column' xs={6} justify='center'>
          <Box>
            <Typography
              className={classes.fluid_paragraph}
              variant='subtitle1'
              style={{
                color: 'gray',
                fontWeight: 400,
                textIndent: '1rem',
                marginTop: '1rem',
              }}
            >
              Name on card
            </Typography>
            <Typography
              className={classes.fluid_paragraph}
              variant='subtitle1'
              style={{
                color: 'black',
                fontWeight: 500,
                textIndent: '1rem',
              }}
            >
              Tomas Morato
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.fluid_paragraph}
              variant='subtitle1'
              style={{ color: 'gray', fontWeight: 400, textIndent: '1rem' }}
            >
              Card Number
            </Typography>
            <Typography
              className={classes.fluid_paragraph}
              variant='subtitle1'
              style={{
                color: 'black',
                fontWeight: 500,
                textIndent: '1rem',
              }}
            >
              Tomas Morato
            </Typography>
          </Box>
          <Box display='flex' justifyContent='center'>
            <Button
              variant='contained'
              color='secondary'
              style={{ color: 'white' }}
            >
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

PaymentMethod.propTypes = {};

export default PaymentMethod;
