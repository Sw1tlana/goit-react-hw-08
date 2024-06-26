import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
}) 


export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}


export const clearToken = () => {
    instance.defaults.headers.common.Authorization = '';
}


export const requestSignUp = async (formData) => {
    const { data } = await instance.post('/users/signup', formData);
    setToken(data.token);
    return data;
}


export const requestSignIn = async (formData) => {
    const { data } = await instance.post('/users/login', formData);
    setToken(data.token);
    return data;
}


export const requestGetCurrentUser = async () => {
    const { data } = await instance.get('/users/current');

    return data;
}


export const requestLogOut = async () => {
    const { data } = await instance.post('/users/logout');

    return data;
}

// Contacts

export const requestGetContacts = async () => {
    const { data } = await instance.get("/contacts");

    return data;
}

export const requestAddContacts = async (formData) => {
    const { data } = await instance.post("/contacts", formData);

    return data;
}

export const requestDeleteContacts = async (contactId) => {
    const { data } = await instance.delete(`/contacts/${contactId}`);

    return data;
}

