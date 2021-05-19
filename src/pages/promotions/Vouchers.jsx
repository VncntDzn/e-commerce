import { MainLayout } from 'layouts';
import {
  Box,
  Grid,
  Hidden,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { FluidTypography } from 'components';
import Sale from './assets/sales.jpg';

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: 'contain',
    width: '20rem',
    [theme.breakpoints.up('sm')]: {
      width: '60rem',
    },
  },
}));
const Vouchers = (props) => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Box display='flex' justifyContent='center' flexDirection='column'>
        <Box display='flex' justifyContent='center' mb={2}>
          <img className={classes.image} src={Sale} alt='sale' />
        </Box>
        <List>
          {[1, 2, 3, 4, 5].map((index) => (
            <ListItem
              key={index}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <ListItemText>Voucher {index}</ListItemText>
              <Button
                onClick={() => alert('To be implemented')}
                color='secondary'
              >
                Claim
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </MainLayout>
  );
};

Vouchers.propTypes = {};

export default Vouchers;
