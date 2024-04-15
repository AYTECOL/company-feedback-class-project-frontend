import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginSession = createAsyncThunk("session/token", async () => {
  console.log("hola");
});
