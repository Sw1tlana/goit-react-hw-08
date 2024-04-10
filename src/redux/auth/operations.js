import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { requestSignUp } from "../services/authService";



export const register = createAsyncThunk(
   "auth/register",
    async (formData, thunkAPI) => {
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
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContact);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const logout = createAsyncThunk( 
       "auth/logout",
        async (contactId, thunkAPI) => {
            try {
                const response = await axios.delete(`/contacts/${contactId}`);
                 console.log("Delete contact response:", response);
                return response.data;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });