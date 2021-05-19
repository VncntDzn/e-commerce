import {
  Box,
  Popper,
  Paper,
  List,
  ListItem,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import customTheme from 'theme/customTheme';

const useStyles = makeStyles((theme) => ({
  list: {
    height: 250,
    width: 200,
    overflow: 'auto',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    '&:hover': {
      color: customTheme.palette.secondary.main,
      cursor: 'pointer',
    },
  },
}));
const SearchMenu = ({ anchorEl, onClose, data }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Popper
      onClose={onClose}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      style={{ marginTop: 2, boxShadow: ' 0 4px 8px 0 rgba(0,0,0,1)' }}
    >
      <Paper raised elevation={50}>
        <List className={classes.list}>
          <Box display='flex' justifyContent='flex-end' p={0} m={0}>
            <IconButton onClick={onClose}>
              <CancelIcon />
            </IconButton>
          </Box>
          {data?.length ? (
            data.map(({ productName, docID }) => (
              <div>
                <hr />
                <ListItem className={classes.listItem} key={docID}>
                  <Typography
                    className={classes.product}
                    onClick={() =>
                      history.push(`/product/single-post/${docID}`)
                    }
                  >
                    {productName}
                  </Typography>
                </ListItem>
              </div>
            ))
          ) : (
            <h2 style={{ textAlign: 'center' }}>Start typing to search</h2>
          )}
        </List>
      </Paper>
    </Popper>
  );
};

SearchMenu.propTypes = {};

export default SearchMenu;
