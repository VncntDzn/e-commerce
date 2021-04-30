import { createSlice } from '@reduxjs/toolkit';
import {
    RETRIEVE_POSTS,
    UPDATE_POST,
    CREATE_POST,
    DELETE_POST
} from './posts/'

const initialState = {
    createPostStatus: 'idle',
    deletePostStatus: 'idle',
    editPostStatus: 'idle',
    productsStatus: 'idle',
    error: null,
    products: [],



};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        resetState: (state, payload) => {
            state.createPostStatus = null;
        },
    },
    extraReducers: {
        [CREATE_POST.pending]: (state, action) => {
            state.createPostStatus = 'pending'
        },
        [CREATE_POST.fulfilled]: (state, action) => {
            state.createPostStatus = 'success';
            state.error = null
        },
        [CREATE_POST.failed]: (state, action) => {
            state.createPostStatus = 'failed';
        },
        // RETRIEVE  POSTS
        [RETRIEVE_POSTS.pending]: (state, action) => {
            state.productsStatus = 'pending'
        },
        [RETRIEVE_POSTS.fulfilled]: (state, action) => {
            state.productsStatus = 'success';
            state.products = action.payload;

        },
        [RETRIEVE_POSTS.failed]: (state, action) => {
            state.productsStatus = 'failed';

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
            state.deletePostStatus = 'pending'
        },
        [DELETE_POST.fulfilled]: (state, action) => {
            state.deletePostStatus = 'success';

        },
        [DELETE_POST.failed]: (state, action) => {
            state.deletePostStatus = 'failed';
            console.log(action)
        },


    }
});

const { actions, reducer } = postsSlice;
export const { resetState, } = actions
export { CREATE_POST, RETRIEVE_POSTS, UPDATE_POST, DELETE_POST }
export default reducer;
