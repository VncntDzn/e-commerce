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
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { FluidTypography } from 'components';
import { useFetchPosts } from 'helpers';
import ScrollArea from 'react-scrollbar';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';

const useStyles = makeStyles((theme) => ({
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
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
    <Box className={classes.container}>
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
  return (
    <Box className={classes.container}>
      <Hidden mdUp>
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
