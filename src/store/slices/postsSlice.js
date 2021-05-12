import { createSlice } from '@reduxjs/toolkit';
import {
    RETRIEVE_POSTS,
    UPDATE_POST,
    CREATE_POST,
    DELETE_POST
} from './posts/'

const initialState = {
    status: 'idle',
    error: null,
    productsPosts: [],
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [CREATE_POST.pending]: (state, action) => {
            state.status = 'pending'
        },
        [CREATE_POST.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = null
        },
        [CREATE_POST.failed]: (state, action) => {
            state.status = 'failed';
        },
        // RETRIEVE  POSTS
        [RETRIEVE_POSTS.pending]: (state, action) => {
            state.status = 'pending'
        },
        [RETRIEVE_POSTS.fulfilled]: (state, action) => {
            state.status = 'success';
            console.log(action.payload)
            state.productsPosts = action.payload;

        },
        [RETRIEVE_POSTS.failed]: (state, action) => {
            state.status = 'failed';

        },

        // UPDATE USER POSTS
        [UPDATE_POST.pending]: (state, action) => {
            state.status = 'pending'
        },
        [UPDATE_POST.fulfilled]: (state, action) => {
            state.status = 'success';
        },
        [UPDATE_POST.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },
        // DELETE POST POSTS
        [DELETE_POST.pending]: (state, action) => {
            state.status = 'pending'
        },
        [DELETE_POST.fulfilled]: (state, action) => {
            state.status = 'success';

        },
        [DELETE_POST.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },


    }
});

const { reducer } = postsSlice;
export { CREATE_POST, RETRIEVE_POSTS, UPDATE_POST, DELETE_POST }
export default reducer;
