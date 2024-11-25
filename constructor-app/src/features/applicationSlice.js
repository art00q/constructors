import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApplications = createAsyncThunk(
  "applications/fetchApplications",
  async () => {
    const response = await axios.get("http://localhost:3001/applications");
    return response.data;
  }
);

export const addApplication = createAsyncThunk(
  "applications/addApplication",
  async (newApplication) => {
    const response = await axios.post("http://localhost:3001/applications", newApplication);
    return response.data;
  }
);

const applicationsSlice = createSlice({
    name: "applications",
    initialState: {
      list: [], // Список должен быть массивом, а не null
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchApplications.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchApplications.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.list = action.payload; // Обновляем list данными
        })
        .addCase(fetchApplications.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message; // Обновляем ошибку
        });
    },
  });
  

export default applicationsSlice;
