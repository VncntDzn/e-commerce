import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const EDIT_COMMENT = createAsyncThunk('editComment', async ({ commentID, docID, comment }) => {
    try {
        await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .doc(commentID)
            .update({
                comment,
            })

        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default EDIT_COMMENT