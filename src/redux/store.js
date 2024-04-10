import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./Reducer/session.reducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    session: sessionReducer,
  },
});

export default store;
