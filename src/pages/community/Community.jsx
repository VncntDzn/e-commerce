import { Button, Box, Grid, Hidden, makeStyles } from '@material-ui/core';
import { FluidTypography } from 'components';
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
  imageContainer: {
    objectFit: 'contain',
    height: 'fit-content',
    width: '31rem',
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
          <FluidTypography
            text='Discover E-comm'
            minSize='1rem'
            size='1rem'
            maxSize='1.3rem'
            fontWeight={500}
          />
          <FluidTypography
            text='SUBSCRIBE TO THE NEWS'
            minSize='1.3rem'
            size='2.5rem'
            maxSize='4rem'
            fontWeight={700}
            color='black'
          />
          <FluidTypography
            text={`Be aware of all discounts and bargains! Don't miss your benefit!`}
            minSize='1rem'
            size='1.5rem'
            maxSize='1.9rem'
          />
          <Box width={'100%'} mt={2}>
            <Button
              variant='outlined'
              onClick={() => alert('To be implemented')}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid lg={3} item md={6}>
            <img
              src={HappyPeople}
              className={classes.imageContainer}
              alt='People'
            />
          </Grid>
        </Hidden>
      </Box>
    </Grid>
  );
};

Community.propTypes = {};

export default Community;
