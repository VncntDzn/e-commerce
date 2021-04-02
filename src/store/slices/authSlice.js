import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const registerUser = createAsyncThunk('registerUser', ({ email, password }) => {
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
});
const loginUser = createAsyncThunk('loginUser', async ({ email, password }) => {
    const response = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
            return data.user
        }).catch(e => {
            return e.message
        })

    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        return error.message
    });
    return response
});

const resetPassword = createAsyncThunk('resetPassword', ({ email }) => {


    return firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            return "Success!"
        }).catch(function (error) {
            // An error happened.
            return error.message
        });

});

const initialState = {
    posts: [],
    status: 'idle',
    loading: false,
    error: null,
    observer: null,
    user: [],
    forgotPassword: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        // REGISTER
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
        // LOGIN
        [loginUser.pending]: (state, action) => {
            state.status = 'pending'

        },
        [loginUser.fulfilled]: (state, action) => {
            state.status = 'success';

            state.user = action.payload
            console.log(state.user)

        },
        [loginUser.rejected]: (state, action) => {
            state.status = 'failed'
            alert("FAILED AUTH SLICE")
        },
        // FORGOT PASSWORD
        [resetPassword.pending]: (state, action) => {
            state.status = 'pending'
        },
        [resetPassword.fulfilled]: (state, action) => {
            state.status = 'success';
            state.forgotPassword = action.payload;
        },
        [resetPassword.rejected]: (state, action) => {
            state.status = 'failed'

        },
    }

});

const { actions, reducer } = authSlice;
export default reducer;
//export default authSlice;
export { registerUser, loginUser, resetPassword };