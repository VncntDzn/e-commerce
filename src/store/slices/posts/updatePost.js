import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

const UPDATE_POST = createAsyncThunk('updatePost', async ({ categories, location, documentID, productName, stock, price, description, links, date }) => {
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
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default UPDATE_POST