// src/redux/servicesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await axios.get(`http://localhost:4000/sections/${3}`);
  return response.data.contents.map(content => ({
    id: content.id,
    typeService: content.title,
    description: content.paragraph,
  }));
});

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
