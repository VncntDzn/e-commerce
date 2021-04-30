/**
 * CreatePostPanel - a component where the user can add or edit the item.
 * @param {object} [user] - current user.
 * @param {string} [action] - To transform the product panel to add or edit.
 * @param {Boolean} [openEdit] - passed from UserPosts whether to open or not the ProductPanel.
 * @param {function} [closeEdit] - function passed from UserPosts whether to open or not the ProductPanel.
 */

import { useState } from 'react';
import {
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { Field, Spinner, CustomDialog } from 'components';
import { productSchema } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_POST, UPDATE_POST, resetState } from 'store/slices/postsSlice';
import { useDialog, countriesData } from 'helpers';
import { firebaseStorage } from 'firebase/firebaseConfig';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ImageUploader from 'react-images-upload';
import SuccessAnimation from 'lottie/SuccessAnimation';
import FailedAnimation from 'lottie/FailedAnimation';
import PropTypes from 'prop-types';
import AddCategoryDialog from 'pages/user/AddCategoryDialog';

const animatedComponents = makeAnimated();

const useStyles = makeStyles((theme) => ({
  priceStockContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  selectContainer: {
    width: '97%',
    margin: '0 0.5rem',
  },
  cardContainer: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      width: '60vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '35vw',
    },
  },
  rootContainer: {
    marginTop: theme.spacing(1),
  },
  largeAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(2),
    display: 'flex',
    alignSelf: 'center',
  },
}));
const ProductPanel = ({ user, action, openEdit, closeEdit, documentID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [quillData, setQuillData] = useState('');
  const [links, setLinks] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState(null);
  const [addCategory, setAddCategoryDialog] = useState(null);

  const status = useSelector((state) => state.posts.createPostStatus);
  const error = useSelector((state) => state.posts.error);
  const retrievedCategories = useSelector((state) => state.utils.categories);

  let productTitle;
  if (action === 'add') {
    productTitle = 'Post a Product';
  } else {
    productTitle = 'Edit a Product';
  }
  const handleCreatePost = () => {
    if (action === 'add') {
      setOpen(!open);
    } else {
      closeEdit();
    }
  };

  const { visibility, data, closeModal } = useDialog({
    status,
    error,
    animationSuccess: SuccessAnimation,
    animationFailed: FailedAnimation,
    successText: 'Success!',
  });

  const handleUpload = (files) => {
    const storageRef =
      action === 'add'
        ? firebaseStorage.ref(`add-posts/${user.email}`)
        : firebaseStorage.ref(`edit-posts/${user.email}`);
    let data = [];

    files.forEach(async (file) => {
      try {
        let fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        data.push(await fileRef.getDownloadURL());
        setDisable(false);
      } catch (e) {
        console.log(e);
      }
    });

    setLinks(data);
  };
  const handleSubmit = async ({ productName, price, stock }) => {
    try {
      dispatch(resetState());
      if (links) {
        if (action === 'add') {
          dispatch(
            CREATE_POST({
              productName,
              price,
              stock,
              links,
              location,
              categories,
              description: quillData,
              author: user.email,
              authorDisplayName: user.displayName,
              authorPhoto: user.photoURL,
            })
          );
        } else if (action === 'edit') {
          dispatch(
            UPDATE_POST({
              documentID,
              productName,
              price,
              stock,
              links,
              location,
              categories,
              description: quillData,
            })
          );
        }
      } else {
        alert('Please add image');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid className={classes.rootContainer} container item justify='center'>
      {action === 'add' && (
        <Card>
          <CardContent className={classes.cardContainer}>
            <Avatar className={classes.largeAvatar} src={user.photoURL} />
            <TextField
              label={`What do you want to sell, ${user.displayName}?`}
              onClick={() => setOpen(true)}
              color='secondary'
              fullWidth
              autoFocus
              variant='filled'
            />
          </CardContent>
        </Card>
      )}
      <Dialog
        onClose={handleCreatePost}
        open={action === 'add' ? open : openEdit}
        fullWidth
      >
        <Box display='flex' justifyContent='center'>
          <DialogTitle>{productTitle}</DialogTitle>
        </Box>
        <Spinner visible={visibility} />
        <CustomDialog
          dialog={data.show}
          lottie={data.lottie}
          text={data.text}
          onClose={closeModal}
        />
        <DialogContent>
          <Formik
            initialValues={{
              productName: '',
              price: '',
              stock: '',
            }}
            validationSchema={productSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <Field
                label='Product name'
                name='productName'
                color='secondary'
                variant='outlined'
                multiline
              />

              <Box className={classes.priceStockContainer}>
                <Field
                  label='Price'
                  name='price'
                  color='secondary'
                  variant='outlined'
                />

                <Field
                  label='Stock/s'
                  name='stock'
                  color='secondary'
                  variant='outlined'
                />
              </Box>
              <ReactQuill
                className={classes.selectContainer}
                placeholder='Type definition here...'
                theme='snow'
                value={quillData}
                onChange={(quillData) => setQuillData(quillData)}
              />
              <ImageUploader
                name='image'
                withIcon={true}
                withPreview
                buttonText='Choose images'
                onChange={handleUpload}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />

              <Box display='flex'>
                <Select
                  placeholder='Select at least 3 Categories'
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={retrievedCategories}
                  className={classes.selectContainer}
                  onChange={(param) => {
                    let categoriesArray = [];
                    param.map(({ label }) => categoriesArray.push(label));
                    setCategories(categoriesArray);
                  }}
                />
                <Select
                  placeholder='Select Location'
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  options={countriesData}
                  className={classes.selectContainer}
                  onChange={({ label }) => setLocation(label)}
                />
              </Box>

              <Button
                color='secondary'
                onClick={() => setAddCategoryDialog(true)}
              >
                Category not on the list?
              </Button>
              <DialogActions>
                <Button variant='outlined' onClick={handleCreatePost}>
                  Cancel
                </Button>
                <Button
                  disabled={disabled}
                  color='secondary'
                  variant='outlined'
                  type='submit'
                >
                  Post
                </Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
      <AddCategoryDialog
        open={addCategory}
        onClose={() => setAddCategoryDialog(false)}
      />
    </Grid>
  );
};

ProductPanel.propTypes = {
  user: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
  openEdit: PropTypes.bool,
  closeEdit: PropTypes.any,
};

export default ProductPanel;
