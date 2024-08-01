import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const response = await fetch(
      "https://6697efe202f3150fb66f8a35.mockapi.io/property"
    );
    const data = await response.json();
    return data;
  }
);

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default propertySlice.reducer;
