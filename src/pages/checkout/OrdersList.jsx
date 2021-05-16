/**
 * OrdersList - a component for Orders Page.
 * It also, lists the userOrders of the current user if any.
 */
import {
  Box,
  makeStyles,
  Button,
  IconButton,
  Card,
  Hidden,
  Grid,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FluidTypography } from 'components';
import { DELETE_ITEM } from 'store/slices/orderSlice';
import { useNotifications } from 'helpers';
import DeleteIcon from '@material-ui/icons/Delete';
import OrdersCount from './OrdersCount';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import TotalAmount from './TotalAmount';

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
  const [rating, setRatings] = useState(0);
  const [index, setIndex] = useState(null);
  let userOrders = [],
    favoriteOrders = [];
  orders.filter(({ data, docID }) =>
    data.type === 'order'
      ? userOrders.push({ docID, data })
      : favoriteOrders.push({ docID, data })
  );
  const handleRatings = (ratings, index) => {
    setIndex(index);
    setRatings(ratings);
  };
  const removeItem = (docID) => {
    dispatch(DELETE_ITEM({ docID }));
  };

  return (
    <>
      {userOrders?.length ? (
        <Grid container item spacing={2}>
          <Grid item xs={12} lg={8} xl={8}>
            {userOrders.map(({ docID, data }, index) => (
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
                    <Box display='flex' flexDirection='column'>
                      <img
                        className={classes.image}
                        src={data?.info.links[0]}
                        alt={data?.info.productName}
                      />
                      <ReactStars
                        count={5}
                        edit={true}
                        isHalf={true}
                        size={24}
                        activeColor='#ffd700'
                        value={rating}
                        onChange={(newRating) =>
                          handleRatings(newRating, index)
                        }
                      />
                    </Box>
                    <Hidden xsDown>
                      <OrdersCount data={data} docID={docID} />
                    </Hidden>
                    <Box>
                      <Button
                        color='secondary'
                        onClick={() => {
                          history.push(`/product/single-post/${data?.docID}`);
                        }}
                        style={{ padding: 0 }}
                      >
                        {data?.info.productName}
                      </Button>
                      <FluidTypography
                        text={`₱ ${parseFloat(data?.info.price).toFixed(2)}`}
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
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={4}
            xl={4}
            alignSelf='flex-start'
            justify='flex-start'
          >
            <TotalAmount rating={rating} index={index} />
          </Grid>
        </Grid>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  );
};

export default OrdersList;
