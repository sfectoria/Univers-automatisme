import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token"); // Adjust this line to how you store the token

//users lkol
export const getusers = createAsyncThunk("getusers", async () => {
  try {
    const response = await axios.get("http://localhost:4000/users/AllUsers", {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

//user wehed

export const getuser = createAsyncThunk("getuser", async (id) => {
  try {
    const response = await axios.get("http://localhost:4000/users/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
});

export const adduser = createAsyncThunk("adduser", async (body) => {
  const response = await axios.post("http://localhost:4000/users", body);
  return response.data;
});

export const deleteuser = createAsyncThunk("deleteuser", async (id) => {
  try {
    const response = await axios.delete("http://localhost:4000/users/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
});

export const edituser = createAsyncThunk(
  "edituser",
  async (args, { dispatch }) => {
    const { id, body } = args;
    try {
      console.log("bodyRedux", body);
      const response = await axios.patch(
        "http://localhost:4000/users/" + id,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // dispatch(getuser(id));
      return response.data;
    } catch (error) {
      console.error("Error editing user:", error);
      throw error;
    }
  }
);

// Action types
export const USER_ADDED = "USER_ADDED";
export const USER_ADD_FAILED = "USER_ADD_FAILED";

// Action creators
export const userAdded = (user) => ({
  type: USER_ADDED,
  payload: user,
});

export const userAddFailed = (error) => ({
  type: USER_ADD_FAILED,
  payload: error,
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    users: {
      items: [],
      count: 0,
    },
  },

  reducers: {},
  extraReducers(builder) {
    builder.addCase(getusers.fulfilled, (state, action) => {
      state.users.items = action.payload;
    });

    builder.addCase(getuser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(adduser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(deleteuser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(edituser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
// console.log(counterSlice.actions);

// export const { courses } = counterSlice.actions;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
