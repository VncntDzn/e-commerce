/* PeopleDetails - it lists the information of the followed users.
 * @param {object} [data] - information of the followed users.
 */
import { Button, makeStyles, Box } from '@material-ui/core';
import { FluidTypography } from 'components';
import { useFollowActions } from 'helpers';
import { UNFOLLOW_PEOPLE } from 'store/slices/peopleSlice';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '3px solid red',
    display: 'flex',
    flexDirection: 'column',
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
    <Box className={classes.container}>
      {data.map((param) => (
        <Box display='flex' py={1}>
          <FluidTypography text={param} />
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
