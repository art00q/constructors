import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchConstructors = createAsyncThunk(
  "constructors/fetchConstructors",
  async () => {
    const response = await axios.get("http://localhost:3001/constructors");
    return response.data;
  }
);

const constructorsSlice = createSlice({
  name: "constructors",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConstructors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConstructors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchConstructors.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default constructorsSlice;
