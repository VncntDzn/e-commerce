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
    status: 'idle'

}
const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    extraReducers: {
        [addCategories.pending]: (state, action) => {
            state.status = 'pending'
        },
        [addCategories.fulfilled]: (state, action) => {
            state.status = 'success';
        },
        [addCategories.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [retrieveCategories.pending]: (state, action) => {
            state.status = 'pending'
        },
        [retrieveCategories.fulfilled]: (state, action) => {
            state.status = 'success';
            state.categories = action.payload
            console.log(action.payload)
        },
        [retrieveCategories.rejected]: (state, action) => {
            state.status = 'failed';
        },
    }
});

const { reducer } = utilsSlice;
export default reducer;
export { addCategories, retrieveCategories }
