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
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Authors from './filter/Authors';
import Brands from './filter/Brands';

const animatedComponents = makeAnimated();

const useStyles = makeStyles((theme) => ({
  scrollArea: {
    height: '18rem',
  },
  container: {
    width: 'fit-content',
  },
  selectContainer: {
    margin: '0 0.5rem',
    [theme.breakpoints.up('sm')]: {
      width: '50vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20rem',
    },
  },
  dialogContainer: {
    width: '90vw',
    [theme.breakpoints.up('sm')]: {
      width: 'fit-content',
    },
  },
}));

const FilterProducts = ({ parentCallback }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);

  let categoriesData = [
    { label: 'Brands', value: 'brands' },
    { label: 'Sellers', value: 'sellers' },
  ];
  parentCallback(data);
  let content;
  if (categories === 'brands') {
    content = (
      <div>
        <Select
          placeholder='Select Categories'
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={categoriesData}
          className={classes.selectContainer}
          onChange={({ value }) => setCategories(value)}
        />
        <Brands brandsCallback={(filteredPosts) => setData(filteredPosts)} />
      </div>
    );
  } else {
    content = (
      <div>
        <Select
          placeholder='Select Categories'
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={categoriesData}
          className={classes.selectContainer}
          onChange={({ value }) => setCategories(value)}
        />
        <Authors authorsCallback={(filteredPosts) => setData(filteredPosts)} />
      </div>
    );
  }
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
      <Hidden mdDown>{content}</Hidden>

      <Dialog
        onClose={() => setOpen(!open)}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <DialogTitle>Filter Options</DialogTitle>
        <DialogContent className={classes.dialogContainer}>
          {content}
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
