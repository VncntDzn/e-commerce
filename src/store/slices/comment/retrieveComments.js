import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const RETRIEVE_COMMENTS = createAsyncThunk('retrieveComments', async ({ docID }) => {
    try {
        let retrievedComments = []
        const comments = await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .orderBy("timestamp")
            .get()
        comments.forEach((res) => {
            retrievedComments.push({ commentID: res.id, commentData: res.data() })
        })
        return retrievedComments
    } catch (error) {
        console.log(error)
    }
})

export default RETRIEVE_COMMENTS