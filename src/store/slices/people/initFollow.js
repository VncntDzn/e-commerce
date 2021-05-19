import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

const INIT_FOLLOW = createAsyncThunk('initFollow', async ({ email, }) => {
    try {
        await firestore.collection('people')
            .add({
                email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default INIT_FOLLOW