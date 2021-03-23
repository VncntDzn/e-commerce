import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Hidden,
} from '@material-ui/core';
import Tom from './assets/tom.jpg';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from 'theme/customTheme';

const Recommendations = (props) => {
  /* TODO: HIDE 'VIEW ORDERS BUTTON IF NOT LOGGED IN'
    TODO: USE FLEXBOX with mater
  */
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: customTheme.palette.secondary.light,
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
    },
    avatarLarge: {
      height: theme.spacing(10),
      width: theme.spacing(10),
    },
  }));

  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid
        item
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
      >
        <List dense aria-label='secondary mailbox folders'>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-start'
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatarLarge}
                alt='Travis Howard'
                src={Tom}
              />
            </ListItemAvatar>

            <ListItem button>
              <ListItemText primary='Hi Tomas, recommendations for you.' />
            </ListItem>
          </Box>
        </List>
        <List dense aria-label='secondary mailbox folders'>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-start'
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatarLarge}
                alt='Travis Howard'
                src={Tom}
              />
            </ListItemAvatar>
            <ListItem button>
              <ListItemText
                primary='Your orders'
                secondary='View your orders'
              />
            </ListItem>
          </Box>
        </List>
        <Hidden xsDown>
          <List dense aria-label='secondary mailbox folders'>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-start'
            >
              <ListItemAvatar>
                <Avatar
                  className={classes.avatarLarge}
                  alt='Travis Howard'
                  src={Tom}
                />
              </ListItemAvatar>
              <ListItem button>
                <ListItemText
                  primary='Your orders'
                  secondary='View your orders'
                />
              </ListItem>
            </Box>
          </List>
          <List dense aria-label='secondary mailbox folders'>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-start'
            >
              <ListItemAvatar>
                <Avatar
                  className={classes.avatarLarge}
                  alt='Travis Howard'
                  src={Tom}
                />
              </ListItemAvatar>
              <ListItem button>
                <ListItemText
                  primary='Your orders'
                  secondary='View your orders'
                />
              </ListItem>
            </Box>
          </List>
        </Hidden>
      </Grid>
    </Grid>
  );
};

Recommendations.propTypes = {};

export default Recommendations;
