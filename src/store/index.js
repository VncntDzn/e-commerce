
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
const store = configureStore({
    reducer: authSlice,
    middleware: customizedMiddleware
});

export default store;