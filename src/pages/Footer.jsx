import { Typography, Grid, makeStyles } from '@material-ui/core';
import customTheme from 'theme/customTheme';

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: '60vh',
      backgroundColor: customTheme.palette.secondary.light,
      padding: theme.spacing(3),
    },
    fluid_footer: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      fontWeight: 500,
      color: '#000000',
    },
  }));

  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      className={classes.container}
    >
      <Grid container item direction='row' justify='space-around'>
        <Typography className={classes.fluid_footer}>
          Conditions of Use
        </Typography>
        <Typography className={classes.fluid_footer}>Privacy Notice</Typography>
        <Typography className={classes.fluid_footer}>
          Interest-Based Ads
        </Typography>
      </Grid>
      <Grid container item direction='row' justify='center'>
        <Typography className={classes.fluid_footer}>
          ©2021. E-comm Inc, or its affiliates.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
