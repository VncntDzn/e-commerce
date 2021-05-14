import { useState } from 'react';
import {
  IconButton,
  Hidden,
  Grid,
  TextField,
  Badge,
  Box,
  InputAdornment,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useNotifications, useFetchPosts } from 'helpers';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountMenu from './menus/AccountMenu';
import SearchMenu from './menus/SearchMenu';

const IconsNavigation = (props) => {
  const history = useHistory();
  const { orders } = useNotifications();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);
  const { allPosts } = useFetchPosts({ compareTo: null, compareFrom: null });
  const [searched, setSearchedValue] = useState(null);

  let productName = [];
  allPosts.map(({ data, docID }) => {
    return productName.push({
      productName: data.productName.toUpperCase(),
      docID,
    });
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSearch = (e) => {
    let searchedValue = productName.filter(({ productName }) =>
      productName.includes(e.target.value.toUpperCase())
    );
    setSearchedValue(searchedValue);
  };
  return (
    <>
      <Grid
        container
        xs={7}
        lg={5}
        md={5}
        item
        direction='row'
        alignContent='center'
        justify='flex-end'
        alignItems='flex-end'
      >
        <Hidden smDown>
          <TextField
            label='Search E-comm'
            color='secondary'
            onKeyUp={(e) => handleSearch(e)}
            onClick={(event) => setSearchAnchorEl(event.currentTarget)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            style={{
              paddingBottom: '0.8rem',
            }}
          />
        </Hidden>
        <Hidden mdDown>
          <IconButton
            color='inherit'
            aria-label='cart'
            onClick={() => history.push('/checkout')}
          >
            <Badge
              color='error'
              overlap='circle'
              badgeContent={orders?.length}
              max={10}
              style={{ paddingTop: '.5rem' }}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Hidden>
        <Box display='flex'>
          <Hidden mdUp>
            <TextField
              label='Search E-comm'
              color='secondary'
              onKeyUp={(e) => handleSearch(e)}
              onClick={(event) => setSearchAnchorEl(event.currentTarget)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              style={{
                paddingBottom: '0.8rem',
              }}
            />
          </Hidden>
          <IconButton color='inherit' aria-label='auth' onClick={handleClick}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Box>
      </Grid>
      <AccountMenu anchorEl={anchorEl} onClose={() => setAnchorEl(null)} />
      <SearchMenu
        data={searched}
        anchorEl={searchAnchorEl}
        onClose={() => setSearchAnchorEl(null)}
      />
    </>
  );
};

export default IconsNavigation;
