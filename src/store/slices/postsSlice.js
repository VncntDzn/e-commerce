import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const createPost = createAsyncThunk('createPost', async ({ productName, stock, price, author, description, links, date }) => {
    try {
        firestore.collection('products').add({
            nanoID: nanoid(),
            productName,
            price,
            stock,
            author,
            description,
            links,
            date
        })

        return "success"
    } catch (error) {
        console.log(error)
    }
})

const retrieveAllPosts = createAsyncThunk('retrieveAllPosts', async ({ author }) => {
    try {
        let retrievedPosts = []
        const posts = await firestore.collection("products").get()
        posts.forEach(post => {
            retrievedPosts.push(post.data())
        })

        return retrievedPosts

    } catch (error) {
        console.log(error)
    }
});


const retrieveUserPosts = createAsyncThunk('retrieveUserPosts', async ({ email }) => {
    try {
        let retrievedUserPosts = []
        const posts = await firestore.collection("products").where('author', '==', email).get()
        posts.forEach(post => {
            retrievedUserPosts.push(post.data())
        })

        return retrievedUserPosts

    } catch (error) {
        console.log(error)
    }
});


// TODO: USER SPECIFIC POST, UPDATE POST, DELETE POST, COMMENT ON POST
const initialState = {
    status: 'idle',
    posts: [],
    userPosts: []
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
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
        [retrieveAllPosts.pending]: (state, action) => {
            state.status = 'pending'
        },
        [retrieveAllPosts.fulfilled]: (state, action) => {
            state.status = 'finished';
            state.posts = (action.payload);

        },
        [retrieveAllPosts.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },



        [retrieveUserPosts.pending]: (state, action) => {
            state.status = 'pending'
        },
        [retrieveUserPosts.fulfilled]: (state, action) => {
            state.status = 'finished';
            state.userPosts = (action.payload);


        },
        [retrieveUserPosts.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },
    }
});

const { actions, reducer } = postsSlice;
export { createPost, retrieveAllPosts, retrieveUserPosts }
export default reducer;
