import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

const UPDATE_POST = createAsyncThunk('updatePost', async ({ brand, categories, location, documentID, productName, stock, price, description, links, rating, sold }) => {
    console.log(rating)
    try {
        await firestore.collection('products')
            .doc(documentID).update({
                productName,
                stock,
                price,
                description,
                links,
                location,
                categories,
                brand,
                rating,
                sold,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default UPDATE_POST