import { useState } from 'react';
import {
  makeStyles,
  Box,
  Hidden,
  Button,
  Icon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import Authors from './filter/Authors';
import Brands from './filter/Brands';

const useStyles = makeStyles((theme) => ({
  scrollArea: {
    height: '18rem',
  },
  container: {
    width: 'fit-content',
  },
}));
const FilterProducts = ({ parentCallback }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  parentCallback(data);
  return (
    <Box className={classes.container}>
      <Hidden lgUp>
        <Button
          variant='outlined'
          color='secondary'
          onClick={() => setOpen(!open)}
          endIcon={
            <Icon>
              <FilterListSharpIcon />
            </Icon>
          }
        >
          Filter
        </Button>
      </Hidden>
      <Hidden mdDown>
        <Authors authorsCallback={(filteredPosts) => setData(filteredPosts)} />
        <Brands brandsCallback={(filteredPosts) => setData(filteredPosts)} />
      </Hidden>
      <Dialog
        onClose={() => setOpen(!open)}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <DialogTitle>Filter Options</DialogTitle>
        <DialogContent>
          <Authors
            authorsCallback={(filteredPosts) => setData(filteredPosts)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

FilterProducts.propTypes = {};

export default FilterProducts;
