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
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';
import postsSlice from './slices/postsSlice'


const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
})
const reducers = combineReducers({
    auth: authSlice,
    user: userSlice,
    posts: postsSlice
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'user', 'posts'],

};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
    devTools: process.env.NODE_ENV !== 'production',

});


export default store;