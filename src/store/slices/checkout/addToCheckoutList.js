import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

/* type has three options
    order - to checkout
    favorite - to favorites
    history - to checkout history
*/
const ADD_TO_CHECKOUT = createAsyncThunk('addToCheckout', async ({ paymentMethod = 'COD', address, type = 'order', info, buyer, uid, docID, paid = false }) => {
    console.log(type)
    try {
        await firestore.collection('orders').add({
            address,
            docID,
            buyer,
            uid,
            info,
            type,
            paid,
            orderCount: 1,
            paymentMethod,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        return "success"
    } catch (e) {
        console.log(e)
        return e
    }

})
export default ADD_TO_CHECKOUT