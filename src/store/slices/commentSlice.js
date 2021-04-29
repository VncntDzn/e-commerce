import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';
import moment from 'moment';

const addComment = createAsyncThunk('addComment', async ({ commentorPhoto, docID, author, comment }) => {
    try {

        await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .add({
                date: moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a'),
                author,
                comment,
                commentorPhoto
            })

        return "success"
    } catch (error) {
        console.log(error)
    }
})

const updateComment = createAsyncThunk('updateComment', async ({ commentID, docID, comment }) => {
    try {
        await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .doc(commentID)
            .update({
                comment,
            })

        return "success"
    } catch (error) {
        console.log(error)
    }
})
const retrieveComments = createAsyncThunk('retrieveComments', async ({ docID }) => {
    try {
        let retrievedComments = []
        const comments = await firestore
            .collection('products')
            .doc(docID)
            .collection('comments')
            .orderBy("date")
            .get()
        comments.forEach((res) => {
            retrievedComments.push({ commentID: res.id, commentData: res.data() })
        })
        return retrievedComments
    } catch (error) {
        console.log(error)
    }
})
const initialState = {
    comments: [],
    commentStatus: 'idle',
    editCommentStatus: 'idle'
}
const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [addComment.pending]: (state, action) => {
            state.commentStatus = 'pending'
        },
        [addComment.fulfilled]: (state, action) => {
            state.commentStatus = 'success';

            console.log(action.payload)
        },
        [addComment.rejected]: (state, action) => {
            state.commentStatus = 'failed'
        },
        // RETRIEVE COMMENTS
        [retrieveComments.pending]: (state, action) => {
            state.commentStatus = 'pending'
        },
        [retrieveComments.fulfilled]: (state, action) => {
            state.commentStatus = 'success';
            state.comments = action.payload

        },
        [retrieveComments.rejected]: (state, action) => {
            state.commentStatus = 'failed'
        },
        // EDIT COMMENT
        [updateComment.pending]: (state, action) => {
            state.commentStatus = 'pending'
        },
        [updateComment.fulfilled]: (state, action) => {
            state.editCommentStatus = 'success';
        },
        [updateComment.rejected]: (state, action) => {
            state.commentStatus = 'failed'
        },
    }
});

const { reducer } = commentSlice;
export default reducer;
export { addComment, retrieveComments, updateComment };
