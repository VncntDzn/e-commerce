import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { retrieveUserPosts } from 'store/slices/postsSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Posts = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(retrieveUserPosts());
  }, [dispatch]);

  return (
    <Card>
      <CardContent>Content Here</CardContent>
      <ReactQuill value={posts.description} readOnly={true} theme={'bubble'} />
    </Card>
  );
};

Posts.propTypes = {};

export default Posts;
