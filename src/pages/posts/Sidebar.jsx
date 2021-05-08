import { useState } from 'react';
import { makeStyles, Box, Checkbox } from '@material-ui/core';
import { FluidTypography } from 'components';
import { useFetchPosts } from 'helpers';
import ScrollArea from 'react-scrollbar';

const Sidebar = ({ parentCallback }) => {
  const [checked, setChecked] = useState(false);
  const [author, setAuthor] = useState(null);
  const { allPosts, authors } = useFetchPosts({ compareFrom: author });
  parentCallback(allPosts);
  const handleChange = (e, author, index) => {
    setChecked(index);
    setAuthor(author);
  };

  let uniqueAuthors = [];
  authors.map(({ data }) =>
    uniqueAuthors.includes(data.author) ? null : uniqueAuthors.push(data.author)
  );

  return (
    <Box style={{ border: '3px solid red', width: 'fit-content' }}>
      <FluidTypography text='Sellers' />
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
  );
};

Sidebar.propTypes = {};

export default Sidebar;
