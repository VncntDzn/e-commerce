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

const updatePost = createAsyncThunk('updatePost', async ({ documentID, productName, stock, price, description, links, date, author }) => {
    try {
        await firestore.collection('products')
            .doc(documentID)
            .set({
                productName,
                stock,
                price,
                description,
                links,
                date,
                author
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
    userPostStatus: 'idle',
    deletePostStatus: 'idle',
    editPostStatus: 'idle'
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

const { reducer } = postsSlice;
export { createPost, retrieveAllPosts, retrieveUserPosts, updatePost, deletePost }
export default reducer;
