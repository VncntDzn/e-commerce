import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const DELETE_POST = createAsyncThunk('deletePost', async ({ docID }) => {
    try {
        await firestore.collection('products')
            .doc(docID)
            .delete()
        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default DELETE_POST