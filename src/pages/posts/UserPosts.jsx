/**
 * UserPost component displays the posts of the user by getting the email of the current user.
 * @param {object} [user] - current user, if user has no post then display an h1 tag.
 */
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  Box,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUserPosts } from 'store/slices/postsSlice';
import { FluidTypography, ProductPanel } from 'components';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import customTheme from 'theme/customTheme';
const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    height: 'fit-content',
  },
  cardContainer: {
    margin: '1rem 0',
    height: 'fit-content',
    width: '20rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: '30vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '15vw',
    },
  },
  largeAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(2),
    display: 'flex',
    alignSelf: 'center',
  },

  paginationContainer: {
    display: 'flex',
    placeContent: 'center',
    width: 'inherit',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '20px',
    listStyle: 'none',
    padding: '0.8rem 0',
    paddingRight: '1rem',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      width: '20rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '30rem',
    },
  },
  pageStyle: {
    cursor: 'pointer',
  },
  paginationActive: {
    backgroundColor: customTheme.palette.secondary.main,
    color: 'white',
    padding: theme.spacing(1),
    borderRadius: '20%',
  },
}));
const UserPosts = ({ user }) => {
  const { email, photoURL } = user;
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [editDialog, setEditDialog] = useState(false);
  const [docID, setDocID] = useState(null);
  const userPosts = useSelector((state) => state.posts.userPosts);
  const userPostStatus = useSelector((state) => state.posts.userPostStatus);

  const handleClick = (event, docID) => {
    setAnchorEl(event.currentTarget);
    setDocID(docID);
  };

  // get the current page
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  let pageCount = 10;
  useEffect(() => {
    dispatch(retrieveUserPosts({ email }));
  }, [email, dispatch]);

  if (userPostStatus === 'success') {
    pageCount = Math.ceil(userPosts.length / PER_PAGE);
  } else {
    pageCount = 0;
  }
  return (
    <Box>
      <Box className={classes.container}>
        {userPosts?.length ? (
          userPosts
            .slice(offset, offset + PER_PAGE)
            .map(({ data, docID }, index) => (
              <Card raised key={index} className={classes.cardContainer}>
                <CardContent>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    mb={1}
                  >
                    <Box display='flex' alignItems='center'>
                      <Avatar className={classes.largeAvatar} src={photoURL} />
                      <FluidTypography
                        text={data.displayName}
                        minSize='1rem'
                        size='0.9rem'
                        maxSize='1rem'
                        fontWeight='500'
                        variant='subtitle1'
                      />
                    </Box>
                    <IconButton
                      onClick={(event) => handleClick(event, docID)}
                      style={{ padding: 0, margin: 0 }}
                    >
                      <MoreHorizIcon />
                    </IconButton>

                    <Menu
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(null)}
                    >
                      <MenuItem onClick={() => setEditDialog(true)}>
                        Edit
                      </MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </Menu>
                  </Box>
                  <img
                    className={classes.image}
                    src={data.links[0]}
                    alt='product'
                  />

                  <FluidTypography
                    text={data.productName}
                    minSize='1rem'
                    size='0.9rem'
                    maxSize='1rem'
                    fontWeight='500'
                    variant='subtitle1'
                  />
                  <FluidTypography
                    text={`₱ ${parseFloat(data.price).toFixed(2)}`}
                    minSize='1rem'
                    size='0.9rem'
                    maxSize='1rem'
                    fontWeight='500'
                    variant='subtitle1'
                  />

                  <ReactStars
                    count={5}
                    edit={false}
                    size={24}
                    activeColor='#ffd700'
                  />

                  <Box display='flex' justifyContent='flex-end'>
                    <Button
                      variant='contained'
                      color='secondary'
                      style={{ color: 'white' }}
                    >
                      Buy
                    </Button>
                    &nbsp;
                    <Button
                      variant='contained'
                      onClick={() => {
                        history.push(`/product/single-post/${data.nanoID}`);
                      }}
                      style={{ backgroundColor: 'red', color: 'white' }}
                    >
                      View
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))
        ) : (
          <div>
            <h1>Nothing to see here yet.</h1>
          </div>
        )}
      </Box>

      {userPosts?.length && (
        <Box className={classes.paginationContainer}>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            pageClassName={classes.pageStyle}
            containerClassName={classes.pagination}
            activeClassName={classes.paginationActive}
          />
        </Box>
      )}
      <ProductPanel
        openEdit={editDialog}
        closeEdit={() => setEditDialog(false)}
        user={user}
        action='edit'
        documentID={docID}
      />
    </Box>
  );
};

UserPosts.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserPosts;
