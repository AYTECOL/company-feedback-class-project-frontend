import { createSlice } from "@reduxjs/toolkit";
import { loginSession } from "../Actions/session.actions";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    loading: false,
    loadingSession: true,
    error: null,
    user: null,
    session: null,
  },
  extraReducers: (builder) => {
    // LoginSession
    builder.addCase(loginSession.pending, (state) => {
      state.loading = true;
      state.session = null;
      state.error = null;
    });
    builder.addCase(loginSession.fulfilled, (state, action) => {
      state.loading = false;
      state.session = action.payload;
      state.error = null;
    });
    builder.addCase(loginSession.rejected, (state, action) => {
      state.loading = false;
      state.session = null;
      state.error = action.payload;
    });

    // session recover
    // builder.addCase(sessionRecover.pending, (state) => {
    //   state.loadingSession = true;
    // });
    // builder.addCase(sessionRecover.fulfilled, (state, action) => {
    //   state.session = action.payload;
    //   state.user = action.payload.attributes;
    //   state.loadingSession = false;
    // });
    // builder.addCase(sessionRecover.rejected, (state, action) => {
    //   state.loadingSession = false;
    //   state.error = action.payload;
    // });
  },
});

export default sessionSlice;
