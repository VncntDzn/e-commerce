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

import ImageUploader from 'react-images-upload';

const useStyles = makeStyles((theme) => ({
  priceStockContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
const CreatePostPanel = ({ user }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [picture, setPictures] = useState([]);
  const handleCreatePost = () => {
    setOpen(!open);
    console.log(user);
  };

  const handleUpload = (picture) => {
    setPictures(picture.concat(picture));
    console.log(picture);
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
            validationSchema={productSchema}
            initialValues={{
              productName: '',
              price: '',
              stock: '',
              date: '',
            }}
            onSubmit={(values, actions) => {
              alert(values);
            }}
          >
            <Form>
              <Field
                label='Product name'
                name='productName'
                color='secondary'
                variant='outlined'
                multiline
              />

              <Field
                label='Categories'
                name='categories'
                color='secondary'
                variant='outlined'
                multiline
                select
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
              <ImageUploader
                withIcon={true}
                withPreview
                buttonText='Choose images'
                onChange={handleUpload}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />
              <Field
                name='createdAt'
                color='secondary'
                variant='outlined'
                type='date'
              />
            </Form>
          </Formik>

          <DialogActions>
            <Button variant='outlined' onClick={handleCreatePost}>
              Cancel
            </Button>
            <Button variant='outlined' type='submit' color='secondary'>
              Post
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

CreatePostPanel.propTypes = {};

export default CreatePostPanel;
