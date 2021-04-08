import {
  Button,
  Typography,
  Box,
  Grid,
  Hidden,
  makeStyles,
} from '@material-ui/core';
import customTheme from 'theme/customTheme';
import HappyPeople from './assets/community.png';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: customTheme.palette.tertiary.light,
  },
  containerSlogan: {
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
  },
  fluid_header: {
    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    fontWeight: 600,
  },
  fluid_paragraph: {
    fontSize: 'clamp(1rem, 4vw, 1.3rem)',
    color: `${customTheme.palette.tertiary.dark}`,
  },
}));
const Community = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction='row'>
      <Box
        display='flex'
        justifyContent='space-evenly'
        width='100vw'
        px={3}
        py={2}
        my={2}
        className={classes.container}
      >
        <Grid item className={classes.containerSlogan} md={6} lg={5}>
          <Typography className={classes.fluid_paragraph}>
            Discover E-comm
          </Typography>
          <Typography className={classes.fluid_header}>
            SUBSCRIBE TO THE NEWS
          </Typography>
          <Typography className={classes.fluid_paragraph} variant='h6'>
            Be aware of all discounts and bargains! Don't miss your benefit!
          </Typography>
          <Box width={'100%'} mt={2}>
            <Button variant='outlined'>Subscribe</Button>
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid lg={3} item md={6}>
            <img src={HappyPeople} alt='Puppy inside a box' />
          </Grid>
        </Hidden>
      </Box>
    </Grid>
  );
};

Community.propTypes = {};

export default Community;
