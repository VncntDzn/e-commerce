/**
 * TotalAmount - component for Orders that computes the total price of the orders.
 */
import { useState } from 'react';
import { FluidTypography } from 'components';
import {
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  TextField,
} from '@material-ui/core';
import { useNotifications } from 'helpers';
import { UPDATE_POST } from 'store/slices/posts';
import { useDispatch } from 'react-redux';
import ConfirmationDialog from './ConfirmationDialog';
import { UPDATE_ITEM } from 'store/slices/checkout';

const TotalAmount = ({ rating, index }) => {
  const SHIPPING_FEE = 50;
  const dispatch = useDispatch();
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { orders } = useNotifications();

  const handleCheckout = () => {
    setDialogOpen(!dialogOpen);

    if (rating === 0) {
      alert('Please add a rating');
    } else {
      dispatch(
        UPDATE_POST({
          sold: 1,
          rating,
          documentID: orders[index]?.data.docID,
          brand: orders[index]?.data.info.brand,
          categories: orders[index]?.data.info.categories,
          location: orders[index]?.data.info.location,
          productName: orders[index]?.data.info.productName,
          stock: orders[index]?.data.orderCount,
          price: orders[index]?.data.info.price,
          description: orders[index]?.data.info.description,
          links: orders[index]?.data.info.links,
        })
      );
      setTimeout(() => {
        dispatch(
          UPDATE_ITEM({
            paymentMethod,
            address: address,
            docID: orders[index].docID,
            orderCount: orders[index].data.orderCount,
            paid: true,
            type: 'history',
          })
        );
      }, 2000);
    }
  };
  let totalAmount = 0;
  orders.map(({ data }) => {
    totalAmount += Number(data.info.price * data.orderCount);

    return parseFloat(totalAmount).toFixed(2);
  });
  return (
    <Box>
      {orders?.length ? (
        <>
          <Box>
            <FluidTypography
              text={`Choose Shipping Option`}
              minSize='1.2rem'
              size='1.2rem'
              maxSize='1.5rem'
              fontWeight={700}
              color='black'
            />
            <TextField
              label='Input delivery address'
              variant='filled'
              fullWidth
              color='secondary'
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            flexDirection='column'
          >
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
                text={`₱ ${SHIPPING_FEE}`}
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
              text={`₱ ${parseFloat(totalAmount + SHIPPING_FEE).toFixed(2)}`}
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
          <RadioGroup row name='position'>
            {['Credit Card', 'Cash on Delivery', 'Debit Card'].map(
              (param, i) => (
                <FormControlLabel
                  key={i}
                  value={param}
                  control={<Radio color='secondary' />}
                  label={param}
                  labelPlacement='start'
                  onClick={() => setPaymentMethod(param)}
                />
              )
            )}
          </RadioGroup>
          <Box display='flex' justifyContent='flex-end'>
            <Button
              onClick={() => handleCheckout()}
              variant='contained'
              color='secondary'
              style={{ color: 'white' }}
            >
              Checkout
            </Button>
          </Box>

          {rating === 0 ? null : (
            <ConfirmationDialog
              open={dialogOpen}
              address={address}
              onClose={() => setDialogOpen(!dialogOpen)}
              paymentMethod={paymentMethod}
            />
          )}
        </>
      ) : null}
    </Box>
  );
};

export default TotalAmount;
