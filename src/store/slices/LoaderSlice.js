import { createSlice } from "@reduxjs/toolkit";

export const LoaderSlice = createSlice({
  name: "loader",
  initialState: {
    load: false,
    alertText: "",
  },
  reducers: {
    updateLoaderFields: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateLoaderFields } = LoaderSlice.actions;

export default LoaderSlice.reducer;
