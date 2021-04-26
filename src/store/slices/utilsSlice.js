import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const addCategories = createAsyncThunk('addCategories', async ({ categories }) => {
    try {
        firestore.collection('categories').add({
            categories
        })

        return "success"
    } catch (error) {
        console.log(error)
    }
})
const initialState = {
    comments: [],
    categoryStatus: 'idle'
}
const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    extraReducers: {
        [addCategories.pending]: (state, action) => {
            state.categoryStatus = 'pending'
        },
        [addCategories.fulfilled]: (state, action) => {
            state.categoryStatus = 'success';
        },
        [addCategories.rejected]: (state, action) => {
            state.categoryStatus = 'failed';
        },
    }
});

const { actions, reducer } = utilsSlice;
export default reducer;
export { addCategories }
