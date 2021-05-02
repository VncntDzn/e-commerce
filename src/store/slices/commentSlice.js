import { createSlice } from '@reduxjs/toolkit';
import { RETRIEVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from './comment'

const initialState = {
    comments: [],
    commentStatus: 'idle',
    editCommentStatus: 'idle'
}
const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [ADD_COMMENT.pending]: (state, action) => {
            state.commentStatus = 'pending'
        },
        [ADD_COMMENT.fulfilled]: (state, action) => {
            state.commentStatus = 'success';
        },
        [ADD_COMMENT.rejected]: (state, action) => {
            state.commentStatus = 'failed'
        },
        // RETRIEVE COMMENTS
        [RETRIEVE_COMMENTS.pending]: (state, action) => {
            state.commentStatus = 'pending'
        },
        [RETRIEVE_COMMENTS.fulfilled]: (state, action) => {
            state.commentStatus = 'success';
            state.comments = action.payload

        },
        [RETRIEVE_COMMENTS.rejected]: (state, action) => {
            state.commentStatus = 'failed'
        },
        // EDIT COMMENT
        [EDIT_COMMENT.pending]: (state, action) => {
            state.commentStatus = 'pending'
        },
        [EDIT_COMMENT.fulfilled]: (state, action) => {
            state.editCommentStatus = 'success';
        },
        [EDIT_COMMENT.rejected]: (state, action) => {
            state.commentStatus = 'failed'
        },
        // DELETE COMMENT
        [DELETE_COMMENT.pending]: (state, action) => {
            state.commentStatus = 'pending'
        },
        [DELETE_COMMENT.fulfilled]: (state, action) => {
            state.editCommentStatus = 'success';
        },
        [DELETE_COMMENT.rejected]: (state, action) => {
            state.commentStatus = 'failed'
        },
    }
});

const { reducer } = commentSlice;
export default reducer;
export { ADD_COMMENT, RETRIEVE_COMMENTS, EDIT_COMMENT, DELETE_COMMENT };
