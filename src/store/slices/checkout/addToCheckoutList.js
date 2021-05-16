import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

/* type has three options
    order - to checkout
    favorite - to favorites
    history - to checkout history
*/
const ADD_TO_CHECKOUT = createAsyncThunk('addToCheckout', async ({ type = 'order', info, buyer, uid, docID, }) => {
    console.log(type)
    try {
        await firestore.collection('orders').add({
            docID,
            buyer,
            uid,
            info,
            type,
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