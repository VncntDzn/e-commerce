
import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authSlice from './slices/authSlice';

const reducers = combineReducers({
    counter: authSlice,
});


const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,

});

export default store;