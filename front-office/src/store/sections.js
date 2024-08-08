
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchSections = createAsyncThunk("fetchSections", async () => {
  const response = await axios.get("http://localhost:4000/sections")
  return response.data
})
export const fetchSection = createAsyncThunk("fetchSection", async (id) => {
  const response = await axios.get("http://localhost:4000/sections/" + id)
  console.log(response.data,"data")
  return response.data
})











const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {
    section: null,
    sections: {
      items: [],
     
    }

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSections.fulfilled, (state, action) => {
        state.sections.items = action.payload
      })
      builder.addCase(fetchSection.fulfilled, (state, action) => {
        state.section = action.payload
    })
  },


});


export default sectionsSlice.reducer;