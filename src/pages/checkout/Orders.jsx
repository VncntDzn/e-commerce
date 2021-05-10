import React from 'react';
import PropTypes from 'prop-types';
import { MainLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { FluidTypography } from 'components';
import OrdersList from './OrdersList';

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
      <OrdersList />
    </MainLayout>
  );
};

Orders.propTypes = {};

export default Orders;
