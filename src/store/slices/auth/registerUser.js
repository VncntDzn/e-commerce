import { createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const REGISTER_USER = createAsyncThunk('registerUser', async ({ email, password, displayName, photoURL }) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        response.user.updateProfile({ displayName, photoURL })

        return response.user
    } catch (e) {
        return e.message
    }
});

export default REGISTER_USER;