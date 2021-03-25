import React from 'react';
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
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    containerContact: {
      display: 'flex',
      flexDirection: 'column',
    },
    containerList: {
      [theme.breakpoints.up('sm')]: {
        placeContent: 'center',
        display: 'flex',
        flexDirection: 'row',
      },
    },
    avatarLarge: {
      height: theme.spacing(10),
      width: theme.spacing(10),
    },
  }));

  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Box display='flex' justifyContent='center' width='100vw'>
        <Grid className={classes.containerContact} item container md={6} lg={5}>
          <List className={classes.containerList} dense>
            <ListItem button>
              <ListItemAvatar style={{ paddingRight: '1rem' }}>
                <Avatar
                  className={classes.avatarLarge}
                  alt='Travis Howard'
                  src={Tom}
                />
              </ListItemAvatar>
              <ListItemText
                primary='Hi Tomas, this is some recommendation'
                secondary='Recommendation'
              />
            </ListItem>

            <ListItem button>
              <ListItemAvatar style={{ paddingRight: '1rem' }}>
                <Avatar
                  className={classes.avatarLarge}
                  alt='Travis Howard'
                  src={Tom}
                />
              </ListItemAvatar>
              <ListItemText
                primary='Recommendation'
                secondary='Recommendation'
              />
            </ListItem>
          </List>
        </Grid>

        <Hidden smDown>
          <Grid md={6} item lg={5}>
            <List className={classes.containerList} dense>
              <ListItem button>
                <ListItemAvatar style={{ paddingRight: '1rem' }}>
                  <Avatar
                    className={classes.avatarLarge}
                    alt='Travis Howard'
                    src={Tom}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Hi Tomas, this is some recommendation'
                  secondary='Recommendation'
                />
              </ListItem>

              <ListItem button>
                <ListItemAvatar style={{ paddingRight: '1rem' }}>
                  <Avatar
                    className={classes.avatarLarge}
                    alt='Travis Howard'
                    src={Tom}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Recommendation'
                  secondary='Recommendation'
                />
              </ListItem>
            </List>
          </Grid>
        </Hidden>
      </Box>
    </Grid>
  );
};

Recommendations.propTypes = {};

export default Recommendations;
