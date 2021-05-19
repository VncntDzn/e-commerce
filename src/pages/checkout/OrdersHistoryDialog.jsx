/**
 * Orders history.
 * @param {Boolean} [open] - whether to open or not the dialog.
 * @param {Function} [onClose] - to close the dialog.
 */
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
import ScrollArea from 'react-scrollbar';
import PropTypes from 'prop-types';

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
      {historyOrders?.length ? (
        <>
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
                <FluidTypography
                  text={`Payment Method: ${params.paymentMethod}`}
                />
              </ScrollArea>
              <hr />
            </DialogContent>
          ))}
        </>
      ) : (
        <DialogTitle>You don't have any orders yet.</DialogTitle>
      )}
      <DialogActions>
        <Button onClick={() => onClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

OrdersHistory.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrdersHistory;
