/**
 * OrdersList - a component for Orders Page.
 * It also, lists the orders of the current user if any.
 */
import {
  Box,
  makeStyles,
  Button,
  IconButton,
  Card,
  Hidden,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FluidTypography } from 'components';
import { DELETE_ITEM } from 'store/slices/orderSlice';
import { useNotifications } from 'helpers';
import DeleteIcon from '@material-ui/icons/Delete';
import OrdersCount from './OrdersCount';

const useStyles = makeStyles((theme) => ({
  container: {},
  image: {
    height: '10rem',
    width: '10rem',
    objectFit: 'contain',

    [theme.breakpoints.up('sm')]: {
      height: '10rem',
      width: '20rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '15rem',
      width: '15rem',
    },
  },
}));
const OrdersList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { orders } = useNotifications();

  const removeItem = (docID) => {
    dispatch(DELETE_ITEM({ docID }));
  };

  return (
    <>
      {orders?.length ? (
        <>
          {orders.map(({ docID, data }, index) => (
            <Card key={index} style={{ margin: '1rem 0', padding: '0.5rem' }}>
              <Box
                display='flex'
                flexDirection='column'
                flexWrap='wrap'
                width='100%'
              >
                <Box
                  display='flex'
                  justifyContent='space-evenly'
                  alignItems='center'
                  height='min-content'
                  width='100%'
                >
                  <img
                    className={classes.image}
                    src={data.info.links[0]}
                    alt={data.info.productName}
                  />
                  <Hidden xsDown>
                    <OrdersCount data={data} docID={docID} />
                  </Hidden>
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
                  <IconButton
                    onClick={() => removeItem(docID)}
                    style={{ padding: 0 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Hidden smUp>
                  <OrdersCount data={data} docID={docID} />
                </Hidden>
              </Box>
            </Card>
          ))}
        </>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  );
};

export default OrdersList;
