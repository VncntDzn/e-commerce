import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const registerUser = createAsyncThunk(
    'registerUser', ({ email, password }) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            // Signed in 
            var user = userCredential.user;
            return "Success!"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return errorMessage
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
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.status = 'pending'

        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = action.payload;
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'failed'
            alert("FAILED AUTH SLICE")
        },
    }
});

const { actions, reducer } = authSlice;
export default reducer;
//export default authSlice;
export { registerUser };