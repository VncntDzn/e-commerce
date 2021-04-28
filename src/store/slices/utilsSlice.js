import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firebaseConfig';

const addCategories = createAsyncThunk('addCategories', async ({ categories }) => {
    try {

        await firestore.collection('categories').add({
            categories
        })

        return "success"
    } catch (error) {
        console.log(error)
    }
})

const retrieveCategories = createAsyncThunk('retrieveCategories', async () => {
    try {
        let retrieveData = []
        const response = await firestore.collection('categories').get()
        response.forEach((res) => {
            retrieveData.push(res.data())

        })

        console.log(retrieveData)
        return retrieveData
    } catch (error) {
        console.log(error)
    }
})
const initialState = {
    categories: [],
    error: null,
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
        [retrieveCategories.pending]: (state, action) => {
            state.categoryStatus = 'pending'
        },
        [retrieveCategories.fulfilled]: (state, action) => {
            state.categoryStatus = 'success';
            state.categories = action.payload
            console.log(action.payload)
        },
        [retrieveCategories.rejected]: (state, action) => {
            state.categoryStatus = 'failed';
        },
    }
});

const { reducer } = utilsSlice;
export default reducer;
export { addCategories, retrieveCategories }
