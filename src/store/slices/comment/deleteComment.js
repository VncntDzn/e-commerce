import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const DELETE_COMMENT = createAsyncThunk('deleteComment', async ({ docID, commentID }) => {
    try {
        console.log(docID)
        await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .doc(commentID)
            .delete()
        return "success"
    } catch (error) {
        console.log(error)
    }
})

export default DELETE_COMMENT