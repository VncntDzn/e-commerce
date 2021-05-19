import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

import firebase from 'firebase/firebaseConfig';
const ADD_COMMENT = createAsyncThunk('addComment', async ({ email, commentorPhoto, docID, displayName, comment }) => {
    try {

        await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .add({
                displayName,
                email,
                comment,
                commentorPhoto,
                isEdited: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

        return "success"
    } catch (error) {
        console.log(error)
    }
})

export default ADD_COMMENT