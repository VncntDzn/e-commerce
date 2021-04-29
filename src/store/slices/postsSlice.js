import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const createPost = createAsyncThunk('createPost', async ({ authorDisplayName, categories, location, productName, stock, price, author, description, links, date }) => {
    try {
        console.log(authorDisplayName)
        await firestore.collection('products').add({
            nanoID: nanoid(),
            productName,
            price,
            stock,
            author,

            authorDisplayName,
            description,
            links,
            date,
            categories,
            location
        })
        return "success"
    } catch (error) {
        console.log(error)
    }
})

const updatePost = createAsyncThunk('updatePost', async ({ authorDisplayName, categories, location, documentID, productName, stock, price, description, links, date, author }) => {
    try {
        await firestore.collection('products')
            .doc(documentID)
            .set({
                authorDisplayName,
                productName,
                stock,
                price,
                description,
                links,
                date,
                author,
                location,
                categories
            })
        return "success"
    } catch (error) {
        console.log(error)
    }
})



const deletePost = createAsyncThunk('deletePost', async ({ docID }) => {
    try {
        await firestore.collection('products')
            .doc(docID)
            .delete()
        return "success"
    } catch (error) {
        console.log(error)
    }
})
const retrieveAllPosts = createAsyncThunk('retrieveAllPosts', async () => {
    try {
        let allPosts = []
        const posts = await firestore.collection("products").get()
        posts.forEach(post => {
            allPosts.push({ docID: post.id, data: post.data() })
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

const initialState = {
    createPostStatus: 'idle',
    error: null,
    posts: [],
    userPosts: [{}],
    userPostStatus: 'idle',
    deletePostStatus: 'idle',
    editPostStatus: 'idle',
    retrieveAllPostStatus: 'idle'
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        resetState: (state, payload) => {
            state.createPostStatus = null;
        }
    },
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
            state.retrieveAllPostStatus = 'pending'
        },
        [retrieveAllPosts.fulfilled]: (state, action) => {
            state.retrieveAllPostStatus = 'success';
            state.posts = (action.payload);

        },
        [retrieveAllPosts.failed]: (state, action) => {
            state.retrieveAllPostStatus = 'failed';

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
        // UPDATE USER POSTS
        [updatePost.pending]: (state, action) => {
            state.status = 'pending'
        },
        [updatePost.fulfilled]: (state, action) => {
            state.status = 'success';
        },
        [updatePost.failed]: (state, action) => {
            state.status = 'failed';
            console.log(action)
        },
        // DELETE POST POSTS
        [deletePost.pending]: (state, action) => {
            state.deletePostStatus = 'pending'
        },
        [deletePost.fulfilled]: (state, action) => {
            state.deletePostStatus = 'success';

        },
        [deletePost.failed]: (state, action) => {
            state.deletePostStatus = 'failed';
            console.log(action)
        },
    }
});

const { actions, reducer } = postsSlice;
export const { resetState } = actions
export { createPost, retrieveAllPosts, retrieveUserPosts, updatePost, deletePost }
export default reducer;
