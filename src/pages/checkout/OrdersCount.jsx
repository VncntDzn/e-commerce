/**
 * OrdersCount - component of OrdersList to manipulate the order count of the order.
 * @param {docID} - document id of the order coming  from OrdersList component.
 * @param {data} - data of the order coming  from OrdersList component.
 */
import { Box, IconButton, TextField } from '@material-ui/core';
import { UPDATE_ITEM } from 'store/slices/orderSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import customTheme from 'theme/customTheme';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const OrdersCount = ({ docID, data }) => {
  const dispatch = useDispatch();
  const increaseOrder = (e, docID, data) => {
    dispatch(UPDATE_ITEM({ docID, orderCount: data.orderCount + 1 }));
  };
  const decreaseOrder = (e, docID, data) => {
    dispatch(UPDATE_ITEM({ docID, orderCount: data.orderCount - 1 }));
  };
  return (
    <Box display='flex' justifyContent='flex-end'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        width={1}
        style={{ width: '10rem' }}
      >
        <IconButton onClick={(e) => increaseOrder(e, docID, data)}>
          <AddIcon />
        </IconButton>
        <TextField
          color='secondary'
          defaultValue={0}
          value={data?.orderCount}
          type='number'
          inputProps={{
            style: {
              width: 'fit-content',
              height: 'fit-content',
              textAlign: 'center',
              color: customTheme.palette.secondary.main,
            },
          }}
        />
        <IconButton onClick={(e) => decreaseOrder(e, docID, data)}>
          <RemoveIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

OrdersCount.propTypes = {
  data: PropTypes.object.isRequired,
  docID: PropTypes.shape([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default OrdersCount;
