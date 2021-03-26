import { createSlice, nanoid } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const initialState = {
    posts: [],
    status: 'idle',
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser(state, action) {
            const { email, password } = action.payload;

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    console.log('clicked')
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });

        }

    },
});

export default authSlice;
