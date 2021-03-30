import React from 'react';
import PropTypes from 'prop-types';
import { MainLayout } from 'layouts';

const NotFound = (props) => {
  return (
    <MainLayout
      children={
        <>
          <h1>Not Found</h1>
        </>
      }
    />
  );
};

NotFound.propTypes = {};

export default NotFound;
