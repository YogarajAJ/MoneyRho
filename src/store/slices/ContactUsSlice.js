import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  fullName:'',
  email:'',
  mobile:'',
  
};
export const ContactUsSlice = createSlice({
  name: "contactUs",
  initialState: DEFAULT_STATE,
  reducers: {
    updateContactDataFields: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetContactData: (state) => (state = DEFAULT_STATE),
  },
});

export const { updateContactDataFields, resetContactData } = ContactUsSlice.actions;

export default ContactUsSlice.reducer;
