import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
const ShippingMethod = (props) => {
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
        Choose Shipping
      </Typography>
      <RadioGroup row aria-label='position' name='position' defaultValue='top'>
        <FormControlLabel
          value='start'
          control={<Radio color='secondary' />}
          label='Delivery at Home'
          labelPlacement='start'
        />
        <FormControlLabel
          value='bottom'
          control={<Radio color='secondary' />}
          label='Delivery'
          labelPlacement='start'
        />
      </RadioGroup>
      <Box display='flex' justifyContent='space-between'>
        <Typography
          className={classes.fluid_paragraph}
          variant='subtitle1'
          style={{ color: 'black', fontWeight: 600 }}
        >
          Subtotal (2 items):
        </Typography>
        <Typography
          className={classes.fluid_paragraph}
          variant='subtitle1'
          style={{ color: 'black', fontWeight: 600 }}
        >
          $400.00
        </Typography>
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <Typography
          className={classes.fluid_paragraph}
          variant='subtitle1'
          style={{ color: 'black', fontWeight: 600 }}
        >
          Shipping:
        </Typography>
        <Typography
          className={classes.fluid_paragraph}
          variant='subtitle1'
          style={{ color: 'black', fontWeight: 600 }}
        >
          $5.00
        </Typography>
      </Box>
      <hr />
      <Box display='flex' justifyContent='space-between'>
        <Typography
          className={classes.fluid_paragraph}
          variant='subtitle1'
          style={{ color: 'black', fontWeight: 600 }}
        >
          Cart total:
        </Typography>
        <Typography
          className={classes.fluid_paragraph}
          variant='subtitle1'
          style={{ color: 'black', fontWeight: 600 }}
        >
          $405.00
        </Typography>
      </Box>
    </>
  );
};

ShippingMethod.propTypes = {};

export default ShippingMethod;
