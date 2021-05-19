/* PeopleDetails - it lists the information of the followed users.
 * @param {object} [data] - information of the followed users.
 */
import { Button, makeStyles, Box } from '@material-ui/core';
import { useFollowActions } from 'helpers';
import { UNFOLLOW_PEOPLE } from 'store/slices/peopleSlice';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    [theme.breakpoints.up('md')]: {
      width: '60vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50vw',
    },
  },
}));
const PeopleDetails = ({ action = 'following', data }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const followedID = useSelector((state) => state.people.followedUserID);
  const { following } = useFollowActions(followedID);

  const handleUnfollow = () => {
    dispatch(
      UNFOLLOW_PEOPLE({
        parentDocID: followedID,
        childDocID: following[0]?.docID,
      })
    );
  };
  return (
    <Box>
      {data.map((param) => (
        <Box
          display='flex'
          py={1}
          justifyContent='space-between'
          className={classes.detailsContainer}
        >
          <Button color='secondary' startIcon={<AccountBoxIcon />}>
            {param}
          </Button>
          &nbsp;
          <Button
            onClick={() => handleUnfollow()}
            variant='contained'
            className={classes.button}
            style={{
              color: 'white',
              backgroundColor: 'red',
              maxWidth: '9rem',
              width: '7rem',
            }}
            startIcon={<RemoveCircleOutlineIcon />}
          >
            Unfollow
          </Button>
        </Box>
      ))}
    </Box>
  );
};

PeopleDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PeopleDetails;
