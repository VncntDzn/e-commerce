import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MainLayout } from 'layouts';
const SinglePost = ({ match }) => {
  const { author } = match.params;
  /*  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  ); */
  return <MainLayout>hji</MainLayout>;
};

SinglePost.propTypes = {};

export default SinglePost;
