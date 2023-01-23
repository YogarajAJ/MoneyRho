import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: false,
    email: "",
    password: "",
  },
  reducers: {
    updateLoginFields: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateLoginFields } = LoginSlice.actions;

export default LoginSlice.reducer;
