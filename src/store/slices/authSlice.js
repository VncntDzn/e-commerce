import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const registerUser = createAsyncThunk(
    'registerUser', ({ email, password }) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(email, password)
            // Signed in 
            var user = userCredential.user;
            // ...

        })
        .catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        })
);
const initialState = {
    posts: [],
    status: 'idle',
    loading: false,
    error: null
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.status = 'pending'

        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = 'success';

        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'failed'

        },
    }
});

const { actions, reducer } = authSlice;
export default reducer;
//export default authSlice;
export { registerUser };