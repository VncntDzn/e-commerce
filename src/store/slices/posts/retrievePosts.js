import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const RETRIEVE_POSTS = createAsyncThunk('retrievePosts', async () => {
    try {
        let retrievedPosts = [];
        const posts = await firestore
            .collection("products")
            .orderBy("timestamp")
            .get()
        posts.forEach(post => {
            retrievedPosts.push({
                docID: post.id,
                data: post.data()
            })
        })
        return retrievedPosts
    } catch (error) {
        return error
    }
});

export default RETRIEVE_POSTS