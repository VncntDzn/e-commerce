import { useState } from 'react';
import {
  Button,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Box,
  Divider,
  Paper,
  Tabs,
  Tab,
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100vw',
    border: '3px solid red',
  },
});
const UserActivities = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container item lg={8} xl={8}>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='secondary'
          textColor='secondary'
          aria-label='icon label tabs example'
        >
          <Tab icon={<FavoriteIcon />} label='FAVORITES' />
          <Tab icon={<PersonPinIcon />} label='NEARBY' />
        </Tabs>
        <Box value={value} index={0}>
          Item One
        </Box>
      </Paper>
    </Grid>
  );
};

UserActivities.propTypes = {};

export default UserActivities;
