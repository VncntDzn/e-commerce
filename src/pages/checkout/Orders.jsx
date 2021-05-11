/**
 * Orders Page - the root file for orders.
 */
import React from 'react';
import { MainLayout } from 'layouts';
import { Box, Grid, Radio, FormControlLabel, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { FluidTypography } from 'components';
import OrdersList from './OrdersList';
import TotalAmount from './TotalAmount';

const Orders = (props) => {
  const displayName = useSelector((state) => state.auth.displayName);
  return (
    <MainLayout>
      <FluidTypography
        text={`Your shopping cart ${displayName}`}
        minSize='1.2rem'
        size='1.5rem'
        maxSize='1.4rem'
        fontWeight={500}
        color='black'
      />
      <Grid container spacing={2}>
        <Grid xs={12} item lg={8} xl={8}>
          <OrdersList />
        </Grid>
        <Grid item xs={12} lg={4} xl={4} style={{ paddingTop: '1rem' }}>
          <TotalAmount />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Orders;
