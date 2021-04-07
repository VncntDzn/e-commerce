import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const registerUser = createAsyncThunk('registerUser', async ({ email, password }) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return response.user
    } catch (e) {
        return e.message
    }
});
const loginUser = createAsyncThunk('loginUser', async ({ email, password }) => {
    try {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response.user
    } catch (e) {
        return e.message
    }
});

const resetPassword = createAsyncThunk('resetPassword', async ({ email }) => {
    try {
        await firebase.auth().sendPasswordResetEmail(email);
        return "Success!"
    } catch (e) {
        return e.message
    }
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
            state.user = action.payload;
            let EMAIL_MESSAGE = 'The email address is already in use by another account.'

            if (action.payload === EMAIL_MESSAGE) {
                state.error = action.payload;
            } else {
                state.error = null;
            }
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'failed'
        },
        // LOGIN
        [loginUser.pending]: (state, action) => {
            state.status = 'pending'

        },
        [loginUser.fulfilled]: (state, action) => {
            state.status = 'success';
            state.user = action.payload;
            let PASSWORD_MESSAGE = 'The password is invalid or the user does not have a password.';

            if (action.payload === PASSWORD_MESSAGE) {
                state.error = action.payload;
            } else {
                state.error = null;
            }
        },
        [loginUser.rejected]: (state, action) => {
            state.status = 'failed'
        },
        // FORGOT PASSWORD
        [resetPassword.pending]: (state, action) => {
            state.status = 'pending'
        },
        [resetPassword.fulfilled]: (state, action) => {
            state.status = 'success';
            state.forgotPassword = action.payload;
            let FORGOT_PASSWORD = 'There is no user record corresponding to this identifier. The user may have been deleted.';

            if (action.payload === FORGOT_PASSWORD) {
                state.error = action.payload;
            } else {
                state.error = null;
            }
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