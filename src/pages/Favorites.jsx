/**
 * FavoritesList - a component for Favorites Page.
 * It also, lists the favorite items of the current user if any.
 */
import { MainLayout } from 'layouts';
import {
  Box,
  makeStyles,
  Button,
  IconButton,
  Card,
  Grid,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FluidTypography } from 'components';
import { ADD_TO_CHECKOUT } from 'store/slices/orderSlice';
import { useNotifications } from 'helpers';
import DeleteIcon from '@material-ui/icons/Delete';
import ReactStars from 'react-rating-stars-component';

const useStyles = makeStyles((theme) => ({
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

const Favorites = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { orders } = useNotifications({ collection: 'favorites' });

  const favorites = [];

  orders.filter(({ data }) =>
    data.type === 'favorite' ? favorites.push(data) : null
  );
  const removeItem = ({ docID, orderCount }) => {
    alert('To be implemented');
  };

  return (
    <MainLayout>
      <h2>Your Favorite items</h2>
      {favorites?.length ? (
        <Grid container direction='column' item spacing={2}>
          {favorites.map((param, index) => (
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
                      src={param?.info.links[0]}
                      alt={param?.info.productName}
                    />
                    {param?.info.rating && (
                      <ReactStars
                        value={param.info?.rating}
                        count={5}
                        edit={false}
                        size={24}
                        activeColor='#ffd700'
                      />
                    )}
                  </Box>
                  <Box>
                    <Button
                      color='secondary'
                      onClick={() => {
                        history.push(`/product/single-post/${param.docID}`);
                      }}
                      style={{ padding: 0 }}
                    >
                      {param.info.productName}
                    </Button>
                    <FluidTypography
                      text={`₱ ${parseFloat(param.info.price).toFixed(2)}`}
                      minSize='1rem'
                      size='1rem'
                      maxSize='1.2rem'
                      fontWeight={600}
                      color='black'
                    />
                  </Box>
                  <IconButton
                    onClick={() => removeItem(param.docID)}
                    style={{ padding: 0 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Box display='flex' justifyContent='flex-end'>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => {
                      dispatch(
                        ADD_TO_CHECKOUT({
                          docID: param.docID,
                          info: param.info,
                          uid: param.uid,
                          type: 'order',
                          buyer: param.buyer,
                        })
                      );
                    }}
                    style={{ color: 'white' }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Grid>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </MainLayout>
  );
};

Favorites.propTypes = {};

export default Favorites;
