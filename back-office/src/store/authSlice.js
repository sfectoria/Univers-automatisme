import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosGetWithHeaders } from '../helpers/axiosWithHeaders';

// Async thunk for login
export const login = createAsyncThunk('auth/login', async (args, { dispatch,rejectWithValue }) => {
  try {
    
    const response = await axios.post('http://localhost:4000/auth/login', args);
    console.log(response.data,"response");

    localStorage.setItem("token", response.data);
    dispatch(getMe());
    return response.data;
  } catch (error) {
  

    return rejectWithValue(error.response.data.message)
  }
});

export const getMe = createAsyncThunk("getme", async () => {
  const response = await axiosGetWithHeaders('auth/getme')
  return response.data; 
});

// Async thunk for updating profile
export const updateProfile = createAsyncThunk(
  "update",
  async (body, { dispatch }) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:4000/auth/update",
      body,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    localStorage.setItem("token", response.data);
    dispatch(getMe());
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.me = action.payload;
    });
   
  },
});
export default authSlice.reducer;
