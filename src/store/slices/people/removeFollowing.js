import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const UNFOLLOW_PEOPLE = createAsyncThunk('unfollowPeople', async ({ parentDocID, childDocID }) => {

    try {
        await firestore.collection('people')
            .doc(parentDocID)
            .collection('following')
            .doc(childDocID)
            .delete()
        return "success"
    } catch (error) {
        console.log(error)
    }
})
export default UNFOLLOW_PEOPLE