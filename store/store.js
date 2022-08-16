import { configureStore } from "@reduxjs/toolkit";
import tunerSlice from "./tuner";

export const store = configureStore({
  reducer: {
    tuner: tunerSlice,
  },
});
