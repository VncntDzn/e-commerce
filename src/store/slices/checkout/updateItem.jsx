import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const UPDATE_ITEM = createAsyncThunk(
  'updateItem',
  async ({ docID, orderCount }) => {
    try {
      await firestore.collection('orders').doc(docID).update({ orderCount });
      return 'success';
    } catch (error) {
      console.log(error);
    }
  }
);
export default UPDATE_ITEM;
