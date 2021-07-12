import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const instance = axios.create({
  baseURL : "http://127.0.0.1:8000"
});

export const createdOrder = createAsyncThunk('order', async ({order,token}) => {
  
    //console.log(userInfo)
console.log(order)
console.log("space space")
 console.log(token)
    // console.log(prop)

    const { data } = await instance.post('/api/orders', order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;

} )