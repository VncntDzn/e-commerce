import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const addComment = createAsyncThunk('addComment', async ({ author, comment, date }) => {
    try {
        firestore.collection('comments').add({
            nanoID: nanoid(),
            author,
            comment,
            date
        })

        return "success"
    } catch (error) {
        console.log(error)
    }
})
const initialState = {
    comments: [],
    status: 'idle'
}
const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [addComment.pending]: (state, action) => {
            state.status = 'pending'
        },
        [addComment.fulfilled]: (state, action) => {
            state.status = 'success';


        },
        [addComment.rejected]: (state, action) => {

        },
    }
});

const { reducer } = commentSlice;
export default reducer;
