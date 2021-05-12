import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const RETRIEVE_POSTS = createAsyncThunk('retrievePosts', async () => {
    try {
        let retrievedProducts = [];
        const products = await firestore
            .collection("products")
            .orderBy("timestamp")
            .get()
        products.forEach(post => {
            retrievedProducts.push({
                docID: post.id,
                data: post.data()
            })
        })
        console.log(retrievedProducts)
        return retrievedProducts
    } catch (error) {
        return error
    }
});

export default RETRIEVE_POSTS