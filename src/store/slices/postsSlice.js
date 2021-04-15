import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const createPost = createAsyncThunk('createPost', async ({ productName, stock, price, author, description }) => {
    try {
        firestore.collection('products').add({
            productName,
            price,
            stock,
            author,
            description,
        })
    } catch (error) {
        console.log(error)
    }
})


const retrieveUserPosts = createAsyncThunk('retrieveUserPosts', async () => {
    try {
        let data = {}
        const response = await firestore.collection("products").get()
        response.forEach(q => {
            data = { ...q.data() }
        })
        return data

    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    status: 'idle',
    posts: []
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [createPost.pending]: (state, action) => {
            state.status = 'pending'
        },
        [createPost.fulfilled]: (state, action) => {
            state.status = 'finished';
            console.log(action)
        },
        [createPost.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },
        // RETRIEVE POSTS
        [retrieveUserPosts.pending]: (state, action) => {
            state.status = 'pending'
        },
        [retrieveUserPosts.fulfilled]: (state, action) => {
            state.status = 'finished';
            state.posts = action.payload;

        },
        [retrieveUserPosts.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },
    }
});

const { actions, reducer } = postsSlice;
export { createPost, retrieveUserPosts }
export default reducer;
