import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAddContacts, requestDeleteContacts, requestGetContacts } from "../services/authService";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await requestGetContacts();
            return response;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await requestAddContacts(newContact);
            return response;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk( 
        "contacts/deleteContact",
        async (contactId, thunkAPI) => {
            try {
                const response = await requestDeleteContacts(contactId);
                return response;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });


