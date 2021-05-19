import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const UPDATE_ITEM = createAsyncThunk(
  'updateItem',
  async ({
    docID,
    orderCount,
    paid,
    type = 'order',
    address,
    paymentMethod,
  }) => {
    try {
      await firestore
        .collection('orders')
        .doc(docID)
        .update({ orderCount, paid, type, address, paymentMethod });
      return 'success';
    } catch (error) {
      console.log(error);
    }
  }
);
export default UPDATE_ITEM;
