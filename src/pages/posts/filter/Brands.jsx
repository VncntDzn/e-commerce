import { useState } from 'react';
import { makeStyles, Box, Checkbox } from '@material-ui/core';
import { FluidTypography } from 'components';
import { useFetchPosts } from 'helpers';
import ScrollArea from 'react-scrollbar';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 'fit-content',
  },
}));
const Brands = ({ brandsCallback }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [brand, setBrand] = useState(null);

  const { allPosts, filteredPosts } = useFetchPosts({
    compareTo: 'brand',
    compareFrom: brand,
  });

  const handleChange = (e, brand, index) => {
    setChecked(index);
    setBrand(brand);
  };

  let uniqueAuthors = [];
  allPosts.map(({ data }) =>
    uniqueAuthors.includes(data.brand) ? null : uniqueAuthors.push(data.brand)
  );
  brandsCallback(filteredPosts);
  return (
    <Box className={classes.container}>
      <ScrollArea
        speed={1}
        className={classes.scrollArea}
        contentClassName='content'
        horizontal={false}
        smoothScrolling={true}
      >
        <FluidTypography
          text='Brands'
          minSize='1.2rem'
          size='1.2rem'
          maxSize='1.2rem'
          fontWeight={500}
        />
        <Box className={classes.container}>
          {uniqueAuthors.map((brand, i) => (
            <Box
              display='flex'
              alignItems='center'
              justifyContent='flex-start'
              key={i}
            >
              <Checkbox
                checked={checked === i}
                onChange={(e) => handleChange(e, brand, i)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <FluidTypography text={brand} />
            </Box>
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
};

Brands.propTypes = {};

export default Brands;
