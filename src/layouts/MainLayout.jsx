import React from 'react';
import { Navbar, BottomNav } from 'layouts';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const MainLayout = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    boxContainer: {
      margin: '0 1rem',
      marginTop: '5rem',
      [theme.breakpoints.up('lg')]: {
        margin: '0 6rem',
        marginTop: '5rem',
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.boxContainer}>{children}</Box>
      <BottomNav />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
