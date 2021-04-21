import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const registerUser = createAsyncThunk('registerUser', async ({ email, password, displayName, photoURL }) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        response.user.updateProfile({ displayName, photoURL })

        return response.user
    } catch (e) {
        return e.message
    }
});
const loginUser = createAsyncThunk('loginUser', async ({ email, password }) => {
    try {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response.user
    } catch (e) {

        return e.message
    }
});

const logoutUser = createAsyncThunk('logoutUser', async () => {
    try {
        firebase.auth().signOut();
        return true
    } catch (e) {
        return e.message
    }
})
const resetPassword = createAsyncThunk('resetPassword', async ({ email }) => {
    try {
        await firebase.auth().sendPasswordResetEmail(email);
        return "Success!"
    } catch (e) {
        return e
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
    uid: null,
    loginStatus: '',
    registerStatus: '',
    resetPassword: ''
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getCurrentUser: (state, action) => {
            state.uid = action.payload.uid;
            console.log(state.uid)
        },

    },
    extraReducers: {
        // REGISTER
        [registerUser.pending]: (state, action) => {
            state.registerStatus = 'pending'
        },
        [registerUser.fulfilled]: (state, action) => {

            if (action.payload instanceof Object) {
                state.error = null;
                state.user = action.payload;
                state.registerStatus = 'success';

            } else {
                state.error = action.payload;
                state.registerStatus = 'failed';
            }
        },
        [registerUser.rejected]: (state, action) => {
            state.registerStatus = 'failed';
            console.log("REJECTED")
        },
        // LOGIN
        [loginUser.pending]: (state, action) => {
            state.loginStatus = 'pending'
        },
        [loginUser.fulfilled]: (state, action) => {
            if (action.payload instanceof Object) {
                state.error = null;
                state.loginStatus = 'success';
                state.user = action.payload;
            } else {
                state.loginStatus = 'failed';
                state.error = action.payload;
            }
        },
        [loginUser.rejected]: (state, action) => {
            state.loginStatus = 'failed'
        },
        // LOG OUT
        [logoutUser.pending]: (state, action) => {
            state.status = 'pending';
            state.uid = null;
        },
        [logoutUser.fulfilled]: (state, action) => {
            if (action.payload) {
                state.status = 'success';
                state.error = null;
            } else {
                state.user = action.payload;
                state.error = action.payload;
            }
        },

        [logoutUser.rejected]: (state, action) => {
            state.status = 'failed'
        },
        // FORGOT PASSWORD
        [resetPassword.pending]: (state, action) => {
            state.resetPassword = 'pending'
        },
        [resetPassword.fulfilled]: (state, action) => {
            if (action.payload instanceof Object) {
                state.error = null;
                state.resetPassword = 'success';
                state.forgotPassword = action.payload;
            } else {
                state.error = action.payload;
            }
        },
        [resetPassword.rejected]: (state, action) => {
            state.resetPassword = 'failed'

        },
    }

});

const { actions, reducer } = authSlice;
export const { getCurrentUser, } = actions;
export default reducer;
//export default authSlice;
export { registerUser, loginUser, logoutUser, resetPassword };
