import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { requestAddContacts, requestDeleteContacts, requestGetContacts } from "../services/authService";

// axios.defaults.baseURL = "https://6607e98da2a5dd477b13abca.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await requestGetContacts();
            console.log(response.data);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await requestAddContacts(newContact);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk( 
        "contacts/deleteContact",
        async (contactId, thunkAPI) => {
            try {
                const response = await requestDeleteContacts(contactId);
                 console.log("Delete contact response:", response);
                return response.data;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });