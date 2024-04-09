import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
}) 

export const setToken = (token) => {
    instance.defaults.headers.common.Autorisation = `Bearer ${token}`;
}

export const clearToken = (token) => {
    instance.defaults.headers.common.Autorisation = '';
}

export const requestSignUp = async (formData) => {
    const data = await instance.post(/users/signup, formData);

    return data;
}


export const requestSignIn = async (formData) => {
    const data = await instance.post(/users/login, formData);

    return data;
}

export const requestGetCurrentUser = async () => {
    const data = await instance.get(/users/current);

    return data;
}

export const requestLogOut = async () => {
    const data = await instance.post(​/users​/logout);

    return data;
}