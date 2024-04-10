import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetCurrentUser, requestSignIn, requestSignUp, setToken } from "../services/authService";



export const register = createAsyncThunk(
   "auth/register",
    async (formData, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        try {
            const response = await requestSignUp(formData);
            console.log(response.data);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   });

export const login = createAsyncThunk(
   "auth/login",
    async (formData, thunkAPI) => {
        try {
            const response = await requestSignIn(formData);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const refreshUser = createAsyncThunk( 
      "auth/refresh",
        async (_, thunkAPI) => {
            try {
                const response = await requestGetCurrentUser();
                 console.log("Delete contact response:", response);
                return response.data;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });