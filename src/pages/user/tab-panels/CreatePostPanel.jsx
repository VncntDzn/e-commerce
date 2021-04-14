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

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import ImageUploader from 'react-images-upload';

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
  const [open, setOpen] = useState(false);
  const [picture, setPictures] = useState([]);
  const [value, setValue] = useState('');
  const handleCreatePost = () => {
    setOpen(!open);
  };

  const handleUpload = (picture) => {
    setPictures(picture.concat(picture));
    console.log(picture);
  };
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleQuill = (data) => {
    setValue(data);
  };
  const handleSubmit = async (values) => {
    try {
      console.log(values);
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

      <Dialog
        onClose={handleCreatePost}
        aria-labelledby='simple-dialog-title'
        open={open}
        fullWidth
      >
        <Box display='flex' justifyContent='center'>
          <DialogTitle id='simple-dialog-title'>Post a Product</DialogTitle>
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
