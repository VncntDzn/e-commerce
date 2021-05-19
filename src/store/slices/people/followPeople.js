import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import firebase from 'firebase/firebaseConfig';

const FOLLOW_PEOPLE = createAsyncThunk('followPeople', async ({ postsByFollowedUser = null, docID, user, followers = null, personToFollow }) => {
    try {
        await firestore.collection('people')
            .doc(docID)
            .collection('following')
            .add({
                followed: true,
                following: user,
                followers,
                postsByFollowedUser,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()

            })
        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default FOLLOW_PEOPLE