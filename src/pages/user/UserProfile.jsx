import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Button,
  Box,
  makeStyles,
  Grid,
} from '@material-ui/core';
import UserDetails from './UserDetails';
import { MainLayout } from 'layouts';
const UserProfile = (props) => {
  return (
    <MainLayout>
      <Grid>
        <UserDetails />
        <h1>POSTS AND ACTIVITIES HERE</h1>
      </Grid>
    </MainLayout>
  );
};

UserProfile.propTypes = {};

export default UserProfile;
