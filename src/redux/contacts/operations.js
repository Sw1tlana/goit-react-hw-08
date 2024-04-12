import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAddContacts, requestDeleteContacts, requestGetContacts } from "../services/authService";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const data = await requestGetContacts();
            return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const data = await requestAddContacts(newContact);
            return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk( 
        "contacts/deleteContact",
        async (contactId, thunkAPI) => {
            try {
                const data = await requestDeleteContacts(contactId);
                return data;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });

    // export const updateContact = createAsyncThunk( 
    //     "contacts/updateContact",
    //     async (contact, thunkAPI) => {
    //         try {
    //             const response = await requestUpdateContacts(contact);
    //             return response.data;
    //         }catch(error) {
    //             return thunkAPI.rejectWithValue(error.message); 
    //         }
    // });

