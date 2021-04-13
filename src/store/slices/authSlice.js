import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const registerUser = createAsyncThunk('registerUser', async ({ email, password, displayName }) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        response.user.updateProfile({ displayName })
        console.log(response)
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
    uid: null
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getCurrentUser: (state, action) => {
            state.uid = action.payload.uid;
            console.log(state.uid)
        }
    },
    extraReducers: {
        // REGISTER
        [registerUser.pending]: (state, action) => {
            state.status = 'pending'

        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = 'success';
            state.user = action.payload;

            if (action.payload instanceof Object) {
                state.error = null;
            } else {
                state.error = action.payload;
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
            if (action.payload instanceof Object) {
                state.error = null;
            } else {
                state.error = action.payload;
            }
        },

        // LOG OUT
        [logoutUser.rejected]: (state, action) => {
            state.status = 'failed'
        },

        [logoutUser.pending]: (state, action) => {
            state.status = 'pending';
            state.uid = null;
        },
        [logoutUser.fulfilled]: (state, action) => {
            state.status = 'success';
            state.user = action.payload;

            if (action.payload) {
                state.error = null;
            } else {
                state.error = action.payload;
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

            if (action.payload instanceof Object) {
                state.error = null;
            } else {
                state.error = action.payload;
            }
        },
        [resetPassword.rejected]: (state, action) => {
            state.status = 'failed'

        },
    }

});

const { actions, reducer } = authSlice;
export const { getCurrentUser } = actions;
export default reducer;
//export default authSlice;
export { registerUser, loginUser, logoutUser, resetPassword };
