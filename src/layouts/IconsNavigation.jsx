import { useState } from 'react';
import {
  IconButton,
  Hidden,
  Grid,
  TextField,
  Badge,
  InputAdornment,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'helpers';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountMenu from './menus/AccountMenu';
import SearchMenu from './menus/SearchMenu';

const IconsNavigation = (props) => {
  const history = useHistory();
  const { orders } = useNotifications();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Grid
        container
        xs={6}
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
        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='cart'
            onClick={() => history.push('/checkout')}
          >
            <SearchIcon />
          </IconButton>
        </Hidden>
        <IconButton color='inherit' aria-label='auth' onClick={handleClick}>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Grid>
      <AccountMenu anchorEl={anchorEl} onClose={() => setAnchorEl(null)} />
      <SearchMenu
        anchorEl={searchAnchorEl}
        onClose={() => setSearchAnchorEl(null)}
      />
    </>
  );
};

export default IconsNavigation;
