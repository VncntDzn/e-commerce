import {
  Typography,
  Box,
  Grid,
  Hidden,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FluidTypography } from 'components';
import customTheme from 'theme/customTheme';
import GirlFashion from './assets/girl_fashion.png';
import ManFashion from './assets/man_fashion.png';

const useStyles = makeStyles((theme) => ({
  ecomm: {
    backgroundColor: customTheme.palette.secondary.light,
    margin: '1rem ',
  },
  image: {
    objectFit: 'contain',
    height: '20rem',
    width: '20rem',
  },
}));
const MenWomen = (props) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid container justify='space-between' spacing={2}>
      <Grid item container className={classes.ecomm} sm={5} md={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <FluidTypography
            text='Comfy styles for her'
            minSize='1.3rem'
            size='5vw'
            maxSize='2rem'
            color='black'
            fontWeight='500'
            variant='h1'
          />
          <FluidTypography
            text='Shop E-comm Fashion including clothing, shoes, jewelry, watches,
            bags and more.'
            size='1.1rem'
          />
          <Box>
            <Button
              onClick={() => history.push('/all-posts')}
              variant='outlined'
              style={{ marginTop: '1rem' }}
            >
              See More ⟶
            </Button>
          </Box>
        </Box>
        <Hidden lgDown>
          <Box display='flex' justifyContent='space-evenly' width='100vw'>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              pl={5}
            >
              <Typography>
                <blockquote cite='https://manofmany.com/fashion/mens-fashion-trends/best-fashion-quotes'>
                  “Fashion is an art. You express who you are through what
                  you’re wearing.” – Daniele Donato
                </blockquote>
              </Typography>
            </Box>
            <Box>
              <img
                className={classes.image}
                alt='Girl Fashion'
                src={GirlFashion}
              />
            </Box>
          </Box>
        </Hidden>
      </Grid>
      <Grid item container className={classes.ecomm} md={5} sm={5} lg={5}>
        <Box
          mx={3}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <FluidTypography
            minSize='1.1rem'
            size='1.5rem'
            maxSize='3rem'
            fontWeight={500}
            text='Comfy styles for him'
          />
          <FluidTypography
            minSize='1.1rem'
            size='1.5rem'
            maxSize='3rem'
            text='Shop E-comm Fashion including clothing, shoes, jewelry, watches,
            bags and more.'
          />
          <Box>
            <Button
              onClick={() => history.push('/all-posts')}
              variant='outlined'
              style={{ marginTop: '1rem' }}
            >
              See More ⟶
            </Button>
          </Box>
        </Box>
        <Hidden lgDown>
          <Box display='flex' justifyContent='space-evenly' width='100vw'>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              pl={5}
            >
              <Typography className={classes.fluid_paragraph}>
                <blockquote cite='https://manofmany.com/fashion/mens-fashion-trends/best-fashion-quotes'>
                  “Fashion is an art. You express who you are through what
                  you’re wearing.” – Daniele Donato
                </blockquote>
              </Typography>
            </Box>
            <Box>
              <img
                className={classes.image}
                alt='Man Fashion'
                src={ManFashion}
              />
            </Box>
          </Box>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default MenWomen;
