import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, BottomNav } from 'layouts';
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <BottomNav />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
