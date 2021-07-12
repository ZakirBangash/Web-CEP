import { createAsyncThunk,rejectWithValue } from "@reduxjs/toolkit";
import axios from 'axios'



const instance = axios.create({
    baseURL : "http://127.0.0.1:8000"
});

export const getUser = createAsyncThunk('user', async (prop) => {
    const {email,password} = prop;
    try {
        console.log("api calling")
    const { data } = await instance.post('/api/users/signin', { email, password });
    console.log(data)
    return data;
 } catch(err) {
     console.log(err)
    return err.response.data
 }
} )

export const getUserRegistered = createAsyncThunk('getUserRegistered', async (prop) => {
    const {name,email,password} = prop;
    const { data } = await instance.post('/api/users/register', {name, email, password });
    console.log(data)
    return data;
} )