// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';
import servicesReducer from './servicesSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    services: servicesReducer,

  },
  devTools: true
});

export default store;
