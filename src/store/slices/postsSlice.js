import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const createPost = createAsyncThunk('createPost', async ({ productName, stock, price, author, description, links, date, displayName }) => {
    try {
        firestore.collection('products').add({
            nanoID: nanoid(),
            productName,
            price,
            stock,
            author,
            description,
            displayName,
            links,
            date
        })
        return "success"
    } catch (error) {
        console.log(error)
    }
})

const editPost = createAsyncThunk('editPost', async ({ productName, stock, price, description, links, date }) => {
    try {
        firestore.collection('products').add({
            nanoID: nanoid(),
            productName,
            price,
            stock,
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
        let allPosts = []
        const posts = await firestore.collection("products").get()
        posts.forEach(post => {
            allPosts.push(post.data())
        })
        console.log(allPosts)

        return allPosts

    } catch (error) {
        console.log(error)
    }
});


const retrieveUserPosts = createAsyncThunk('retrieveUserPosts', async ({ email }) => {
    try {
        let retrievedUserPosts = []
        const posts = await firestore.collection("products")
            .where('author', '==', email)
            .orderBy("date")
            .get()
        posts.forEach(post => {
            retrievedUserPosts.push(post.data())
        })
        return retrievedUserPosts

    } catch (error) {
        console.log(error)
    }
});


// TODO:   UPDATE POST, DELETE POST, COMMENT ON POST
const initialState = {
    createPostStatus: 'idle',
    error: null,
    posts: [],
    userPosts: []
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [createPost.pending]: (state, action) => {
            state.createPostStatus = 'pending'
        },
        [createPost.fulfilled]: (state, action) => {
            state.createPostStatus = 'success';
            state.error = null
        },
        [createPost.failed]: (state, action) => {
            state.createPostStatus = 'failed';

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
