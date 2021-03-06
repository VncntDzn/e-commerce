import {
  Grid,
  Box,
  Hidden,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FluidTypography } from 'components';
import customTheme from 'theme/customTheme';
import Macbook from './assets/macbook.png';
import TV from './assets/tv.png';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: customTheme.palette.tertiary.light,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingBottom: '1rem ',
  },
  containerCards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  },
  fluid_header: {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    fontWeight: 500,
    cursor: 'pointer',
  },

  card: {
    height: '18rem',
    width: '18rem',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      height: '15rem',
      width: '15rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '20rem',
      width: '20rem',
    },
  },
  image: {
    objectFit: 'contain',
    height: '15rem',
    width: '15rem',
    [theme.breakpoints.up('sm')]: {
      height: '15rem',
      width: '15rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '13rem',
      width: '13rem',
    },
  },
}));
const Categories = (props) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Box display='flex' justifyContent='space-between' mx={1}>
        <FluidTypography
          minSize='1.2rem'
          size='4vw'
          maxSize='1.3rem'
          text='Shop by categories'
          color='#000000'
          fontWeight={500}
        />
        <Typography
          className={classes.fluid_header}
          color='secondary'
          variant='caption'
          onClick={() => history.push('all-posts')}
        >
          All Departments ???
        </Typography>
      </Box>
      <Box m={3} className={classes.containerCards}>
        <Card onClick={() => history.push('all-posts')}>
          <CardContent className={classes.card}>
            <img className={classes.image} alt='Macbook' src={Macbook} />
            <FluidTypography
              minSize='1rem'
              size='4vw'
              maxSize='1.2rem'
              text='Computers & Accessories'
              color='#000000'
            />
          </CardContent>
        </Card>
        <Hidden xsDown>
          <Card onClick={() => history.push('all-posts')}>
            <CardContent className={classes.card}>
              <img className={classes.image} alt='Macbook' src={TV} />
              <FluidTypography
                minSize='1rem'
                size='4vw'
                maxSize='1.2rem'
                text='Home Accessories'
                color='#000000'
              />
            </CardContent>
          </Card>
        </Hidden>
      </Box>
    </Grid>
  );
};

export default Categories;
