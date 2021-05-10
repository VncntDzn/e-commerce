import { useState, useEffect } from 'react';
import {
  Box,
  makeStyles,
  Button,
  IconButton,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from 'firebase/firebaseConfig';
import { FluidTypography } from 'components';
import { UPDATE_ITEM } from 'store/slices/orderSlice';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import customTheme from 'theme/customTheme';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  image: {
    height: '8rem',
    width: '8rem',
    objectFit: 'contain',
    [theme.breakpoints.up('sm')]: {
      height: '10rem',
      width: '10rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '15rem',
      width: '15rem',
    },
  },
}));
const OrdersList = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const classes = useStyles();
  const uid = useSelector((state) => state.auth.uid);
  const [orders, setOrders] = useState([]);

  const increaseOrder = (e, docID, data) => {
    dispatch(UPDATE_ITEM({ docID, orderCount: data.orderCount + 1 }));
  };
  const decreaseOrder = (e, docID, data) => {
    dispatch(UPDATE_ITEM({ docID, orderCount: data.orderCount - 1 }));
  };

  useEffect(() => {
    // unsubscribe to onSnapshot
    return firestore
      .collection('orders')
      .orderBy('timestamp', 'desc')
      .where('uid', '==', uid)
      .onSnapshot((snapshot) => {
        let ordersArray = [];
        snapshot.forEach((doc) =>
          ordersArray.push({ docID: doc.id, data: doc.data() })
        );
        setOrders(ordersArray);
      });
  }, [uid]);

  return (
    <>
      {orders?.length ? (
        <>
          {orders.map(({ docID, data }, index) => (
            <Card key={index} style={{ margin: '1rem 0' }}>
              <CardContent style={{ padding: '0 1rem' }}>
                <Box display='flex' flexDirection='column' width='100%'>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    height='fit-content'
                    width='100%'
                  >
                    <img
                      className={classes.image}
                      src={data.info.links[0]}
                      alt={data.info.productName}
                    />
                    <Box>
                      <Button
                        color='secondary'
                        onClick={() => {
                          history.push(`/product/single-post/${data.docID}`);
                        }}
                        style={{ padding: 0 }}
                      >
                        {data.info.productName}
                      </Button>
                      <FluidTypography
                        text={`₱ ${parseFloat(data.info.price).toFixed(2)}`}
                        minSize='1rem'
                        size='1rem'
                        maxSize='1.2rem'
                        fontWeight={600}
                        color='black'
                      />
                    </Box>
                    <IconButton style={{ padding: 0 }}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Box
                    display='flex'
                    justifyContent='flex-end'
                    alignItems='center'
                  >
                    <IconButton onClick={(e) => increaseOrder(e, docID, data)}>
                      <AddIcon />
                    </IconButton>
                    <TextField
                      color='secondary'
                      defaultValue={0}
                      value={data.orderCount}
                      type='number'
                      style={{
                        width: '10%',
                        marginBottom: '1rem',
                      }}
                      inputProps={{
                        style: {
                          width: 'fit-content',
                          height: 'fit-content',
                          padding: 0,
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
              </CardContent>
            </Card>
          ))}
        </>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  );
};
OrdersList.propTypes = {};

export default OrdersList;
