import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/firebaseConfig';

const createPost = createAsyncThunk('createPost', async ({ }) => {
    try {
        // const collections = 
    } catch (error) {

    }
})

const initialState = {
    posts: []
};

const postsSlice = {
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {}
};

const { actions, reducer } = postsSlice;

export default reducer;
