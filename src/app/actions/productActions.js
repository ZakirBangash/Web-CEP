import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const instance = axios.create({
    baseURL : "http://localhost:8000"
});

export const getProducts = createAsyncThunk('products', async () => {
    try {

    const response = await instance.get('/api/products');
    return response.data;
    }catch(error){
        console.log(error.response.status)
    }
} )

export const getOnlyProduct = createAsyncThunk('product', async (prop) => {
    const {value} = prop;
    
    try {
        const {data} = await instance.get(`/api/products/${value}`);
        //console.log(response.data)
        return data;
    }catch(error){
        console.log(error.response.data)
        return error.response.data;
    }
    
} )