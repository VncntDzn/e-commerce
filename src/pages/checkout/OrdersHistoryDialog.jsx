import React from 'react';
import PropTypes from 'prop-types';
import ScrollArea from 'react-scrollbar';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';
import { useNotifications } from 'helpers';
import { FluidTypography } from 'components';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 'fit-content',
  },
}));

const OrdersHistory = ({ open, onClose }) => {
  const classes = useStyles();
  const { orders } = useNotifications();
  const historyOrders = [];

  orders.filter(({ data }) =>
    data.type === 'history' && data.paid ? historyOrders.push(data) : null
  );
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Order History</DialogTitle>

      {historyOrders.map((params) => (
        <DialogContent>
          <ScrollArea
            speed={1}
            className={classes.scrollArea}
            contentClassName='content'
            horizontal={false}
            smoothScrolling={true}
          >
            <FluidTypography text={`Buyer: ${params.buyer}`} />
            <FluidTypography text={`Address: ${params.address}`} />
            <FluidTypography text={`Order Count: ${params.orderCount}`} />
            <FluidTypography text={`Payment Method: ${params.paymentMethod}`} />
          </ScrollArea>
          <hr />
        </DialogContent>
      ))}

      <DialogActions>
        <Button onClick={() => onClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

OrdersHistory.propTypes = {};

export default OrdersHistory;
