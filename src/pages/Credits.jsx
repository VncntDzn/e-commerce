import { MainLayout } from 'layouts';
import { Box, Grid, Avatar, makeStyles, IconButton } from '@material-ui/core';
import { FluidTypography } from 'components';
import Vincent from './asset/vincent.png';
import customTheme from 'theme/customTheme';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  ecomm: {
    backgroundColor: customTheme.palette.secondary.light,
    margin: '1rem ',
  },
  image: {
    objectFit: 'contain',
    height: '10rem',
    width: '10rem',
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: theme.spacing(1.5),
  },
}));

const Credits = (props) => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Grid container justify='space-between' spacing={2}>
        <Grid item container className={classes.ecomm} sm={5} md={5} lg={5}>
          <Box
            mx={3}
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar
                alt='Anastasiia Shapoval'
                src={null}
                className={classes.large}
              />
              <FluidTypography
                text='Credits to: Anastasiia Shapoval for this beautiful design'
                minSize='1rem'
                size='1.3rem'
                maxSize='1.5rem'
                color='black'
                fontWeight={500}
              />
            </Box>
            <Box display='flex' justifyContent='center'>
              <a href='https://www.behance.net/talinkapilla'>
                Visit her profile on Behance.
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item container className={classes.ecomm} md={5} sm={5} lg={5}>
          <Box
            mx={3}
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar
                alt='Vincent Dizon'
                src={Vincent}
                className={classes.large}
              />
              <FluidTypography
                text='Credits to: Vincent Dizon for making the design into a website.'
                minSize='1rem'
                size='1.3rem'
                maxSize='1.5rem'
                color='black'
              />
            </Box>
            <Box display='flex' alignItems='center'>
              <FluidTypography
                text='Visit his profile on the following:'
                minSize='1rem'
                size='1rem'
                maxSize='1rem'
                color='black'
              />
              <IconButton href='https://github.com/VncntDzn/'>
                <GitHubIcon />
              </IconButton>
              <IconButton href='https://www.linkedin.com/in/vincent-dizon-34831817b/'>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Credits;
