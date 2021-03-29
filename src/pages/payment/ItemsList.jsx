import React from 'react';
import {
  Typography,
  Box,
  Grid,
  ListItem,
  List,
  Checkbox,
  Hidden,
  IconButton,
} from '@material-ui/core';

import { FluidTypography } from 'components';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Macbook from '../categories/assets/macbook.png';
import customTheme from 'theme/customTheme';
import { makeStyles } from '@material-ui/core/styles';
const ItemsList = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: customTheme.palette.tertiary.light,
    },

    fluid_paragraph: {
      fontSize: 'clamp(0.9rem, 3vw, 1.3rem)',
      fontWeight: 500,
      color: 'grey',
    },
    fluid_product: {
      fontSize: 'clamp(1rem, 3vw, 1.4rem)',
      fontWeight: 600,
    },
    containerProductImage: {
      display: 'flex',

      flex: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        flex: '20%',
        flexDirection: 'row',
      },
    },

    containerProductDetails: {
      display: 'flex',
      flexDirection: 'column',
      flex: 'auto',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        border: '3px solid black',
        flex: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    },

    image: {
      height: '7rem',
      width: '7rem',
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
  const classes = useStyles();
  return (
    <List>
      <ListItem className={classes.container} button>
        <Grid container direction='row'>
          <Box className={classes.containerProductImage}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <img className={classes.image} alt='Macbook' src={Macbook} />
          </Box>
          <Box className={classes.containerProductDetails}>
            <Box>
              <Typography className={classes.fluid_paragraph} variant='caption'>
                In stock
              </Typography>
              <FluidTypography
                variant='h3'
                text='Macbook laptop'
                minSize='1rem'
                size='4vw'
                maxSize='1.4rem'
                fontWeight='500'
              />
              <Typography className={classes.fluid_paragraph} variant='caption'>
                Color: Black
              </Typography>
            </Box>
            <Hidden xsDown>
              <Box className={classes.containerProductQtyPrice}>
                <Typography> + 1 -</Typography>
              </Box>
            </Hidden>
            <Box>
              <Hidden xsDown>
                <Typography>Price</Typography>
              </Hidden>
              <Typography
                className={classes.fluid_paragraph}
                variant='subtitle1'
                style={{ color: 'black', fontWeight: 600 }}
              >
                $900.00
              </Typography>
            </Box>
            <Hidden xsDown>
              <Box display='flex' flexDirection='column'>
                <IconButton color='inherit' aria-label='menu'>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton color='inherit' aria-label='menu'>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </Hidden>
          </Box>
        </Grid>
      </ListItem>
    </List>
  );
};

ItemsList.propTypes = {};

export default ItemsList;
