import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import firebase from 'firebase/firebaseConfig';

const updateProfile = createAsyncThunk('updateProfile', async (params) => {
    const { name, link } = params;

    try {
        const user = await firebase.auth().currentUser;
        user.updateProfile({
            displayName: name, photoURL: link
        });

        return "success"
    } catch (e) {
        return e.message
    }
});


const initialState = {
    status: 'idle',
    loading: false,
    error: null,

};
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        //UDPATE PROFILE
        [updateProfile.pending]: (state, actions) => {
            state.status = 'pending'
        },
        [updateProfile.fulfilled]: (state, actions) => {
            state.status = 'finished';
            console.log(actions)
        },
        [updateProfile.failed]: (state, actions) => {
            state.status = 'failed';
            console.log(actions)
        },
    }

});

const { actions, reducer } = userSlice;
export const { getCurrentUser } = actions;
export default reducer;
export { updateProfile, };
