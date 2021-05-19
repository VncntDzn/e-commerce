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
const Authors = ({ authorsCallback }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [author, setAuthor] = useState(null);

  const { allPosts, filteredPosts } = useFetchPosts({
    compareFrom: author,
  });

  const handleChange = (e, author, index) => {
    setChecked(index);
    setAuthor(author);
  };

  let uniqueAuthors = [];
  allPosts.map(({ data }) =>
    uniqueAuthors.includes(data.author) ? null : uniqueAuthors.push(data.author)
  );
  authorsCallback(filteredPosts);
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
          text='Sellers'
          minSize='1.2rem'
          size='1.2rem'
          maxSize='1.2rem'
          fontWeight={500}
        />
        <Box className={classes.container}>
          {uniqueAuthors.map((author, i) => (
            <Box
              display='flex'
              alignItems='center'
              justifyContent='flex-start'
              key={i}
            >
              <Checkbox
                checked={checked === i}
                onChange={(e) => handleChange(e, author, i)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <FluidTypography text={author} />
            </Box>
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
};

Authors.propTypes = {};

export default Authors;
