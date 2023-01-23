import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";
import FileDataSlice from "./slices/FileDataSlice";
import LoaderSlice from "./slices/LoaderSlice";
import LoginSlice from "./slices/LoginSlice";

const store = configureStore({
  reducer: {
    loader: LoaderSlice,
    fileData: FileDataSlice,
    category:CategorySlice,
    login:LoginSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
