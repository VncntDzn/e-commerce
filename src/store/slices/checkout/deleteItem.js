import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const DELETE_ITEM = createAsyncThunk('deleteItem', async ({ docID, }) => {
    try {
        await firestore.collection('orders')
            .doc(docID)
            .delete()
        return "success"
    } catch (error) {
        console.log(error)
    }

})
export default DELETE_ITEM