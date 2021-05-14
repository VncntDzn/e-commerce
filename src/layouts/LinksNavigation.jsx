import {
  Typography,
  Hidden,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import customTheme from 'theme/customTheme';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    [theme.breakpoints.up('lg')]: {
      margin: '0 6rem',
    },
  },
  button: {
    '&:active': {
      borderBottom: '3px solid red',
    },
    '&:focus': {
      borderBottom: `3px solid ${customTheme.palette.secondary.main}`,
    },
  },
}));
const LinksNavigation = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Router>
      <Grid
        container
        item
        direction='row'
        justify='flex-start'
        alignContent='flex-start'
        xs={6}
        lg={7}
        md={7}
      >
        <Typography
          variant='h6'
          onClick={() => history.push('/')}
          style={{ cursor: 'pointer' }}
        >
          E-comm
        </Typography>
        <Hidden mdDown>
          <Grid
            container
            md={5}
            lg={7}
            item
            direction='row'
            justify='space-around'
            alignItems='center'
            style={{ marginLeft: '2rem' }}
          >
            <Button
              className={classes.button}
              onClick={() => history.push('/all-posts')}
            >
              <div style={{ display: 'flex', cursor: 'pointer' }}>
                <DashboardOutlinedIcon />
                <Typography variant='subtitle1' className={classes.button}>
                  All
                </Typography>
              </div>
            </Button>

            <Button href='#' className={classes.button}>
              <Typography variant='subtitle1'>Today's Deal</Typography>
            </Button>
            <Button className={classes.button}>
              <Typography variant='subtitle1'>Gift Cards</Typography>
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </Router>
  );
};

export default LinksNavigation;
