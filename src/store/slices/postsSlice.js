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

const updatePost = createAsyncThunk('updatePost', async ({ nanoID, productName, stock, price, description, links, date }) => {
    try {
        let arr = []
        const posts = await firestore.collection('products').get()

        /* .where('nanoID', '===', nanoID) */
        posts.forEach(post => {
            arr.push({ docID: post.id, data: post.data() })
        })
        //console.log(arr)
        return arr
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
            .orderBy("date", "desc")
            .get()
        posts.forEach(post => {
            retrievedUserPosts.push({ docID: post.id, data: post.data() })
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
    userPosts: [{}],
    userPostStatus: 'idle'
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
        // RETRIEVE ALL POSTS
        [retrieveAllPosts.pending]: (state, action) => {
            state.status = 'pending'
        },
        [retrieveAllPosts.fulfilled]: (state, action) => {
            state.status = 'success';
            state.posts = (action.payload);

        },
        [retrieveAllPosts.failed]: (state, action) => {
            state.status = 'failed';

        },

        // RETRIEVE USER POSTS
        [retrieveUserPosts.pending]: (state, action) => {
            state.userPostStatus = 'pending'
        },
        [retrieveUserPosts.fulfilled]: (state, action) => {
            state.userPostStatus = 'success';
            state.userPosts = action.payload;
        },
        [retrieveUserPosts.failed]: (state, action) => {
            state.userPostStatus = 'failed';
            console.log(action)
        },
        // RETRIEVE USER POSTS
        [updatePost.pending]: (state, action) => {
            state.status = 'pending'
        },
        [updatePost.fulfilled]: (state, action) => {
            state.status = 'success';
            state.sample = action.payload
            console.log(action.payload)
        },
        [updatePost.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },
    }
});

const { reducer } = postsSlice;
export { createPost, retrieveAllPosts, retrieveUserPosts, updatePost }
export default reducer;
