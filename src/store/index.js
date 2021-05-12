import { combineReducers } from "redux";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authSlice, userSlice, postsSlice, utilsSlice, commentSlice, orderSlice } from './slices'

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
})
const reducers = combineReducers({
    auth: authSlice,
    user: userSlice,
    post: postsSlice,
    utils: utilsSlice,
    comment: commentSlice,
    order: orderSlice
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'user', 'posts', 'comment'],

};

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'logoutUser/fulfilled') {
        storage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')

        state = undefined;
    }

    return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
    devTools: process.env.NODE_ENV !== 'production',

});


export default store;