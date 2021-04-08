import {
  Grid,
  Box,
  Hidden,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import customTheme from 'theme/customTheme';
import Macbook from './assets/macbook.png';
import TV from './assets/tv.png';
import Clothes from './assets/clothes.png';
import Makeup from './assets/makeup.png';

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
    fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
    fontWeight: 500,
  },
  fluid_paragraph: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
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
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Box display='flex' justifyContent='space-between' mx={1}>
        <Typography className={classes.fluid_header} variant='caption'>
          Shop by categories
        </Typography>
        <Typography className={classes.fluid_header} variant='caption'>
          All Departments ⟶
        </Typography>
      </Box>
      <Box m={3} className={classes.containerCards}>
        <Card onClick={() => console.log(1)}>
          <CardContent className={classes.card}>
            <img className={classes.image} alt='Macbook' src={Macbook} />
            <Typography className={classes.fluid_paragraph} variant='caption'>
              Computers & Accessories
            </Typography>
          </CardContent>
        </Card>
        <Hidden xsDown>
          <Card onClick={() => console.log(1)}>
            <CardContent className={classes.card}>
              <img className={classes.image} alt='Macbook' src={TV} />
              <Typography className={classes.fluid_paragraph} variant='caption'>
                Home Accessories
              </Typography>
            </CardContent>
          </Card>
        </Hidden>
        <Hidden mdDown>
          <Card onClick={() => console.log(1)}>
            <CardContent className={classes.card}>
              <img className={classes.image} alt='Macbook' src={Clothes} />
              <Typography className={classes.fluid_paragraph} variant='caption'>
                Computers & Accessories
              </Typography>
            </CardContent>
          </Card>
          <Card onClick={() => console.log(1)}>
            <CardContent className={classes.card}>
              <img className={classes.image} alt='Macbook' src={Makeup} />
              <Typography className={classes.fluid_paragraph} variant='caption'>
                Makeup Accessories
              </Typography>
            </CardContent>
          </Card>
        </Hidden>
      </Box>
    </Grid>
  );
};

Categories.propTypes = {};

export default Categories;
