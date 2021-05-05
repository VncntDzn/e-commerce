import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const RETRIEVE_COMMENTS = createAsyncThunk('retrieveComments', async ({ docID }) => {
    try {
        let retrievedComments = []
        const comments = await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .orderBy("timestamp")
            .get()
        comments.forEach((res) => {
            retrievedComments.push({ commentID: res.id, commentData: res.data() })
        })
        return retrievedComments
    } catch (error) {
        console.log(error)
    }
})

export default RETRIEVE_COMMENTS

/*
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const RETRIEVE_COMMENTS = createAsyncThunk('retrieveComments', ({ docID }) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .orderBy("timestamp")
            .onSnapshot(snapshot => {
                let array = []
                if (snapshot.size) {
                    snapshot.forEach((doc) => array.push({commentData: }))
                    resolve(array)
                } else {
                    reject('may error')
                }
            })
    })
})

export default RETRIEVE_COMMENTS
*/