import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

const ADD_TO_CHECKOUT = createAsyncThunk('addToCheckout', async ({ info, buyer, uid, docID, }) => {
    try {
        await firestore.collection('orders').add({
            docID,
            buyer,
            uid,
            info,
            orderCount: 1,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        return "success"
    } catch (e) {
        console.log(e)
        return e
    }

})
export default ADD_TO_CHECKOUT