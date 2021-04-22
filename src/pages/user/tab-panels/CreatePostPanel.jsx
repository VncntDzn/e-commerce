/**
 * CreatePostPanel - a component where the user can add the item.
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
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { Field } from 'components';
import { productSchema } from 'helpers';
import { useDispatch } from 'react-redux';
import { createPost } from 'store/slices/postsSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ImageUploader from 'react-images-upload';
import { firebaseStorage } from 'firebase/firebaseConfig';
import moment from 'moment';

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
}));
const CreatePostPanel = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [links, setLinks] = useState(null);
  const handleCreatePost = () => {
    setOpen(!open);
  };

  const handleUpload = (files) => {
    const storageRef = firebaseStorage.ref(`posts/${user.email}`);
    let data = [];
    files.forEach(async (file) => {
      try {
        let fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        data.push(await fileRef.getDownloadURL());
        console.log(await fileRef.getDownloadURL());
      } catch (e) {
        console.log(e);
      }
    });

    setLinks(data);
  };
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleQuill = (data) => {
    setValue(data);
  };

  const handleSubmit = async ({ productName, price, stock }) => {
    try {
      if (links) {
        dispatch(
          createPost({
            productName,
            price,
            stock,
            links,
            description: value,
            author: user.email,
            displayName: user.displayName,
            date: moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a'),
          })
        );
      } else {
        alert('Please add image');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Grid>
      <Card style={{ margin: `1rem 0` }}>
        <CardContent>
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

      <Dialog onClose={handleCreatePost} open={open} fullWidth>
        <Box display='flex' justifyContent='center'>
          <DialogTitle>Post a Product</DialogTitle>
        </Box>
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
                value={value}
                onChange={handleQuill}
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
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                className={classes.selectContainer}
              />

              <Button color='secondary'>Category not on the list?</Button>
              <DialogActions>
                <Button variant='outlined' onClick={handleCreatePost}>
                  Cancel
                </Button>
                <Button color='secondary' variant='outlined' type='submit'>
                  Post
                </Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

CreatePostPanel.propTypes = {};

export default CreatePostPanel;
