
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchContents = createAsyncThunk("fetchContentsts", async () => {
    const response = await axios.get("http://localhost:4000/content")
    return response.data
})











const contentsSlice = createSlice({
    name: 'contents',
    initialState: {
       
            items: [],
            item: {},
      
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchContents.fulfilled, (state, action) => {
          state.items = action.payload
        })
    },
  

});
  

  export default contentsSlice.reducer;