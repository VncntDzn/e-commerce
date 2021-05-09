import { useState } from 'react';
import {
  makeStyles,
  Box,
  Checkbox,
  Hidden,
  Button,
  Icon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { FluidTypography } from 'components';
import { useFetchPosts } from 'helpers';
import ScrollArea from 'react-scrollbar';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';

const useStyles = makeStyles((theme) => ({
  scrollArea: {
    height: '18rem',
  },
  container: {
    width: 'fit-content',
  },
}));
const Sidebar = ({ parentCallback }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [author, setAuthor] = useState(null);
  const [open, setOpen] = useState(false);
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

  let content = (
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
  );
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
      <Dialog
        onClose={() => setOpen(!open)}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <DialogTitle>Filter Options</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Close</Button>
        </DialogActions>
      </Dialog>
      <Hidden mdDown>{content}</Hidden>
    </Box>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
