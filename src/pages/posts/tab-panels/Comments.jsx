import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box, Button, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FluidTypography from 'components/FluidTypography';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      width: '95vw',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-10rem',
      width: '30.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-13rem',
      width: '43vw',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-17rem',
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));
const Comments = ({ info }) => {
  const classes = useStyles();
  const retrievedComments = useSelector((state) => state.comment.comments);
  const [readMore, setReadMore] = useState(true);

  return (
    <div>
      <hr style={{ width: '100%' }} />
      <>
        {readMore ? (
          <Button onClick={() => setReadMore(!readMore)} color='secondary'>
            View {retrievedComments.length} comments
          </Button>
        ) : (
          <>
            {retrievedComments.map((data) => (
              <Box
                display='flex'
                flexDirection='column'
                my={1}
                width={'fit-content'}
                height={'fit-content'}
              >
                <Box display='flex' alignItems='flex-start'>
                  <Avatar className={classes.small} src={info.authorPhoto} />
                  <Box
                    display='flex'
                    flexDirection='column'
                    flex={1}
                    style={{
                      background: '#E0E3E4',
                      borderRadius: '10px',
                      padding: '0 1rem',
                    }}
                  >
                    <FluidTypography
                      minSize='0.9rem'
                      maxSize='0.9rem'
                      size='0.5rem'
                      text={data.author}
                    />
                    <FluidTypography text={data.comment} color='black' />
                  </Box>
                </Box>
                <Button
                  color='secondary'
                  style={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Reply
                </Button>
              </Box>
            ))}
            <Button onClick={() => setReadMore(!readMore)} color='secondary'>
              Hide comments
            </Button>
          </>
        )}
      </>
    </div>
  );
};

Comments.propTypes = {};

export default Comments;
