import {
  Grid,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import customTheme from 'theme/customTheme';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: customTheme.palette.secondary.light,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  avatarLarge: {
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
}));
const Recommendations = (props) => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <Grid container className={classes.container}>
      <List className={classes.listContainer} dense>
        {[1, 2, 3].map((index) => (
          <ListItem key={index} button>
            <ListItemAvatar style={{ paddingRight: '1rem' }}>
              <Avatar
                className={classes.avatarLarge}
                alt={currentUser.displayName}
                src={currentUser.photoURL}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`Hi ${currentUser.displayName}, this is some recommendation`}
              secondary='Recommendation'
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

Recommendations.propTypes = {};

export default Recommendations;
