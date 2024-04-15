import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./reducer/session.reducer.js";

const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
});

export default store;
