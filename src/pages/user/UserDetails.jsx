/**
 * User Details is intended for user information.
 * Also it is the component where you can update the user information.
 * @param {string} [email] - the email of the chosen user.
 */
import { useState } from 'react';
import { Button, makeStyles, Avatar, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useFetchPosts } from 'helpers';
import { FluidTypography } from 'components';
import AbstractArt from './assets/abstractart.jpg';
import UpdateProfileDialog from './UpdateProfileDialog';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: '35vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(-7),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(-12),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(10),
    },
  },
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginTop: theme.spacing(-4),
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(-7),
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
  imageContainer: {
    objectFit: 'cover',
    height: '25vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '20vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '30vh',
    },
  },
}));
const UserDetails = ({ email }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const { allPosts } = useFetchPosts({ compareTo: null, compareFrom: null });
  const info = allPosts.filter(({ data }) => email === data.author);

  return (
    <Box className={classes.rootContainer}>
      <img
        className={classes.imageContainer}
        src={AbstractArt}
        alt='abstract'
      />
      <Avatar className={classes.largeAvatar} src={info[0]?.data.authorPhoto} />

      {user.email === email ? (
        <>
          <FluidTypography text={user.displayName} />
          <Button
            onClick={() => setOpen(!open)}
            variant='outlined'
            color='secondary'
          >
            Edit Profile
          </Button>
        </>
      ) : (
        <>
          <FluidTypography text={info[0]?.data.authorDisplayName} />
          <Box display='flex' justifyContent='space-between'>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              style={{ color: 'white', width: '8rem', maxWidth: '10rem' }}
              startIcon={<PersonAddIcon />}
            >
              Follow
            </Button>
            &nbsp;
            <Button
              variant='contained'
              className={classes.button}
              style={{
                color: 'white',
                backgroundColor: 'red',
                maxWidth: '10rem',
                width: '8rem',
              }}
              startIcon={<RemoveCircleOutlineIcon />}
            >
              Unfollow
            </Button>
          </Box>
        </>
      )}
      <UpdateProfileDialog open={open} onClose={() => setOpen(!open)} />
    </Box>
  );
};

UpdateProfileDialog.propTypes = {
  email: PropTypes.string.isRequired,
};

export default UserDetails;
