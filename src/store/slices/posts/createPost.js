import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

const CREATE_POST = createAsyncThunk('createPost', async ({ brand, authorPhoto, authorDisplayName, categories, location, productName, stock, price, author, description, links, date }) => {
    console.log(categories)
    try {
        await firestore.collection('products').add({
            productName,
            price,
            stock,
            author,
            authorDisplayName,
            authorPhoto,
            description,
            links,
            categories,
            location,
            brand,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default CREATE_POST