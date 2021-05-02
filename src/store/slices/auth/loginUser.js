import { createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const LOGIN_USER = createAsyncThunk('loginUser', async ({ email, password }) => {
    try {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response.user
    } catch (e) {

        return e.message
    }
});

export default LOGIN_USER