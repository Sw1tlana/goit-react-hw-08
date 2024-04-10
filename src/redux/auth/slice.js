import { createSlice } from "@reduxjs/toolkit";
import { requestSignUp } from "../services/authService";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(requestSignUp.pending, (state) => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(requestSignUp.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(requestSignUp.rejected, (state) => {
        state.isLoggedIn = false;
        state.error = true;
      })
     
  },
});

export const authReducer = authSlice.reducer;