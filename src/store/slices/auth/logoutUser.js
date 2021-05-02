import { createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const LOGOUT_USER = createAsyncThunk('logoutUser', async () => {
    try {
        firebase.auth().signOut();
        return "success"
    } catch (e) {
        return e.message
    }
})

export default LOGOUT_USER;