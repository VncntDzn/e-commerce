import { createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const RESET_PASSWORD = createAsyncThunk('resetPassword', async ({ email }) => {
    try {
        await firebase.auth().sendPasswordResetEmail(email);
        return "Success!"
    } catch (e) {
        return e
    }
});

export default RESET_PASSWORD