/**
 * Orders Page - the root file for orders.
 */
import { useState } from 'react';
import { MainLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { FluidTypography } from 'components';
import { Button, Box } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import OrdersList from './OrdersList';
import OrdersHistory from './OrdersHistoryDialog';

const Orders = (props) => {
  const displayName = useSelector((state) => state.auth.displayName);
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <MainLayout>
      <Box display='flex' justifyContent='space-between'>
        <FluidTypography
          text={`Your shopping cart ${displayName}`}
          minSize='1.2rem'
          size='1.5rem'
          maxSize='1.4rem'
          fontWeight={500}
          color='black'
        />
        <Button
          onClick={() => setOpenHistory(!openHistory)}
          color='secondary'
          startIcon={<TimelineIcon />}
        >
          History
        </Button>
      </Box>
      <OrdersList />
      <OrdersHistory
        open={openHistory}
        onClose={() => setOpenHistory(!openHistory)}
      />
    </MainLayout>
  );
};

export default Orders;
