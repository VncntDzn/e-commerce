import { useState } from 'react';
import PropTypes from 'prop-types';
import { FluidTypography } from 'components';
import {
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from '@material-ui/core';
import { useNotifications } from 'helpers';
import ConfirmationDialog from './ConfirmationDialog';

const TotalAmount = (props) => {
  const [shippingFee, setShippingFee] = useState(50);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { orders } = useNotifications();

  let totalAmount = 0;
  orders.map(({ data }) => {
    totalAmount += Number(data.info.price);
    return parseFloat(totalAmount).toFixed(2);
  });
  return (
    <Box>
      <Box>
        <FluidTypography
          text={`Choose Shipping Option`}
          minSize='1.2rem'
          size='1.2rem'
          maxSize='1.5rem'
          fontWeight={700}
          color='black'
        />
        <RadioGroup defaultValue='Home' row name='position'>
          <FormControlLabel
            value='Home'
            control={<Radio color='secondary' />}
            label='Home'
            labelPlacement='start'
            onClick={() => setShippingFee(50)}
          />
          <FormControlLabel
            value='Office'
            control={<Radio color='secondary' />}
            label='Office'
            labelPlacement='start'
            onClick={() => setShippingFee(100)}
          />
        </RadioGroup>
      </Box>
      <Box display='flex' justifyContent='space-between' flexDirection='column'>
        <Box display='flex' justifyContent='space-between'>
          <FluidTypography
            text={`Subtotal (${orders.length} item/s) `}
            minSize='1.rem'
            size='1.rem'
            maxSize='1.5rem'
            fontWeight={500}
          />
          <FluidTypography
            text={`₱ ${parseFloat(totalAmount).toFixed(2)}`}
            minSize='1.rem'
            size='1.rem'
            maxSize='1.5rem'
            fontWeight={500}
          />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <FluidTypography
            text='Shipping fee'
            minSize='1.rem'
            size='1.rem'
            maxSize='1.5rem'
            fontWeight={500}
          />
          <FluidTypography
            text={`₱ ${shippingFee}`}
            minSize='1.rem'
            size='1.rem'
            maxSize='1.5rem'
            fontWeight={500}
          />
        </Box>
      </Box>
      <hr />
      <Box display='flex' justifyContent='space-between'>
        <FluidTypography
          text='Total Amount:'
          minSize='1rem'
          size='1.1rem'
          maxSize='1.5rem'
          fontWeight={700}
          color='black'
        />
        <FluidTypography
          text={`₱ ${parseFloat(totalAmount + shippingFee).toFixed(2)}`}
          minSize='1rem'
          size='1.1rem'
          maxSize='1.5rem'
          fontWeight={700}
          color='black'
        />
      </Box>
      <FluidTypography
        text='Payment Method'
        minSize='1rem'
        size='1.1rem'
        maxSize='1.5rem'
        fontWeight={700}
        color='black'
      />
      <RadioGroup row name='position' defaultValue='Cash on Delivery'>
        {['Credit Card', 'Cash on Delivery', 'Debit Card'].map((param, i) => (
          <FormControlLabel
            key={i}
            value={param}
            control={<Radio color='secondary' />}
            label={param}
            labelPlacement='start'
            onClick={() => setPaymentMethod(param)}
          />
        ))}
      </RadioGroup>
      <Box display='flex' justifyContent='flex-end'>
        <Button
          onClick={() => setDialogOpen(!dialogOpen)}
          variant='contained'
          color='secondary'
          style={{ color: 'white' }}
        >
          Checkout
        </Button>
      </Box>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(!dialogOpen)}
      />
    </Box>
  );
};

TotalAmount.propTypes = {};

export default TotalAmount;
