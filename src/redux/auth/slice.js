import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIALE_STATE = {
   user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIALE_STATE,

  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // LOGIN
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // LOGOUT
      .addCase(logout.fulfilled, () => {
        return INITIALE_STATE;
      })
    // REFRESH
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.error = true;
      }) 
      // pending/rejected
      .addMatcher(isAnyOf(
        register.pending, login.pending, logout.pending),
        (state) => {
          state.isLoggedIn = true;
          state.error = false;
        })
      .addMatcher(isAnyOf(
        register.rejected, login.rejected, logout.rejected),
        (state) => {
          state.isLoggedIn = false;
          state.error = true;
        })
  },
});

export const authReducer = authSlice.reducer;