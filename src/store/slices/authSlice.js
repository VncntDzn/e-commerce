import { createSlice } from '@reduxjs/toolkit'
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, RESET_PASSWORD } from './auth'
const initialState = {
    status: 'idle',
    loading: false,
    error: null,
    user: [],
    forgotPassword: null,
    uid: null,
    displayName: ''
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getCurrentUser: (state, action) => {
            state.uid = action.payload.uid;
            state.displayName = action.payload.displayName
        },
        resetState: (state, action) => {
            state.status = null;
        }
    },
    extraReducers: {
        // REGISTER
        [REGISTER_USER.pending]: (state, action) => {
            state.status = 'pending'
        },
        [REGISTER_USER.fulfilled]: (state, action) => {
            if (action.payload instanceof Object) {
                state.error = null;
                state.user = action.payload;
                state.status = 'success';

            } else {
                state.error = action.payload;
                state.status = 'failed';
            }
        },
        [REGISTER_USER.rejected]: (state, action) => {
            state.status = 'failed';
        },
        // LOGIN
        [LOGIN_USER.pending]: (state, action) => {
            state.status = 'pending'
        },
        [LOGIN_USER.fulfilled]: (state, action) => {
            if (action.payload instanceof Object) {
                state.error = null;
                state.status = 'success';
                state.user = action.payload;
            } else {
                state.status = 'failed';
                state.error = action.payload;
            }
        },
        [LOGIN_USER.rejected]: (state, action) => {
            state.status = 'failed'
        },
        // LOG OUT
        [LOGOUT_USER.pending]: (state, action) => {
            state.status = 'pending';

        },
        [LOGOUT_USER.fulfilled]: (state, action) => {
            if (action.payload === 'success') {
                state.user = null;
                state.uid = null
            } else {
                state.error = action.payload;
            }
        },

        [LOGOUT_USER.rejected]: (state, action) => {
            state.status = 'failed'
        },
        // FORGOT PASSWORD
        [RESET_PASSWORD.pending]: (state, action) => {
            state.status = 'pending'
        },
        [RESET_PASSWORD.fulfilled]: (state, action) => {
            if (action.payload === 'success') {
                state.status = 'success';
                state.error = null;
                state.forgotPassword = action.payload;
            } else {
                state.error = action.payload;
            }
        },
        [RESET_PASSWORD.rejected]: (state, action) => {
            state.status = 'failed'

        },
    }
});

const { actions, reducer } = authSlice;
export const { getCurrentUser, resetState } = actions;
export default reducer;
//export default authSlice;
export { REGISTER_USER, LOGIN_USER, LOGOUT_USER, RESET_PASSWORD };
