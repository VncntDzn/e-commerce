import { createSlice } from '@reduxjs/toolkit';
import {
    ADD_TO_CHECKOUT,
    UPDATE_ITEM
} from './checkout'

const initialState = {
    status: 'idle',
    error: null,
    orders: [],
};

const postsSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: {
        [ADD_TO_CHECKOUT.pending]: (state, action) => {
            state.status = 'pending'
        },
        [ADD_TO_CHECKOUT.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = null
        },
        [ADD_TO_CHECKOUT.failed]: (state, action) => {
            state.status = 'failed';
        },
        [UPDATE_ITEM.pending]: (state, action) => {
            state.status = 'pending'
        },
        [UPDATE_ITEM.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = null
        },
        [UPDATE_ITEM.failed]: (state, action) => {
            state.status = 'failed';
        },

    }
});

const { reducer } = postsSlice;
export { ADD_TO_CHECKOUT, UPDATE_ITEM }
export default reducer;
