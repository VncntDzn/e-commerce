import { createSlice } from '@reduxjs/toolkit'
import { FOLLOW_PEOPLE, INIT_FOLLOW, UNFOLLOW_PEOPLE } from './people'

const initialState = {
    status: 'idle',
    loading: false,
    error: null,
    following: [],
    followedUserID: 'sad'
};
const authSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        getUserId: (state, actions) => {
            state.followedUserID = actions.payload.docID
            console.log(actions.payload.docID)
        }
    },
    extraReducers: {
        [INIT_FOLLOW.pending]: (state, action) => {
            state.status = 'pending'
        },
        [INIT_FOLLOW.fulfilled]: (state, action) => {
            if (action.payload instanceof Object) {
                state.error = null;
                state.user = action.payload;
                state.status = 'success';

            } else {
                state.error = action.payload;
                state.status = 'failed';
            }
        },
        [INIT_FOLLOW.rejected]: (state, action) => {
            state.status = 'failed';
        },
        // FOLLOW
        [FOLLOW_PEOPLE.pending]: (state, action) => {
            state.status = 'pending'
        },
        [FOLLOW_PEOPLE.fulfilled]: (state, action) => {
            if (action.payload instanceof Object) {
                state.error = null;
                state.user = action.payload;
                state.status = 'success';

            } else {
                state.error = action.payload;
                state.status = 'failed';
            }
        },
        [FOLLOW_PEOPLE.rejected]: (state, action) => {
            state.status = 'failed';
        },
        // UNFOLLOW
        [UNFOLLOW_PEOPLE.pending]: (state, action) => {
            state.status = 'pending'
        },
        [UNFOLLOW_PEOPLE.fulfilled]: (state, action) => {
            if (action.payload instanceof Object) {
                state.error = null;
                state.user = action.payload;
                state.status = 'success';

            } else {
                state.error = action.payload;
                state.status = 'failed';
            }
        },
        [UNFOLLOW_PEOPLE.rejected]: (state, action) => {
            state.status = 'failed';
        },


    }
});

const { actions, reducer } = authSlice;
export const { getUserId } = actions
export { FOLLOW_PEOPLE, INIT_FOLLOW, UNFOLLOW_PEOPLE };
export default reducer;