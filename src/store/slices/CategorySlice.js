import { createSlice } from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    selectedCategory:""
  },
  reducers: {
    updateCategoryFields: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateCategoryFields } = CategorySlice.actions;

export default CategorySlice.reducer;
