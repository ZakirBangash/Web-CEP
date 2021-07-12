import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'

import { getOnlyProduct, getProducts } from '../../app/actions/productActions';
import { getUser, getUserRegistered } from '../../app/actions/userActions';
import { createdOrder } from '../../app/actions/orderActions';
const initialState = {
  basket: [],
  product: [],
  userInfo: [],
  searchProduct:[],
  shippingAdress : [],
  orderCreate: [],
  payment:'paypal',
  loader: false,
  error: ''
};


export const eCommerceSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addProduct: (state, action) => {

      console.log(current(state))
      state.basket.push(action.payload)
    },

    removeProduct(state, action) {

      const newTodos = state.basket.filter(todo => todo.id !== action.payload)

      state.basket = newTodos
    },
    cartShippingAddress :(state, action) => {
        state.shippingAdress.push(action.payload);
    },
    cartPaymentMethod : (state, action ) => {
      state.payment = action.payload;
    },
    emptyCart : (state,action) => {
        state.payment = '';
        state.basket = []
        state.shippingAdress = []
    },
    logout : (state,action) => {
      state.userInfo = [];
      console.log("done with empty")
    }
  },

  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loader = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loader = false;
      state.product = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },


    
    [createdOrder.pending]: (state, action) => {
      state.loader = true;
    },
    [createdOrder.fulfilled]: (state, action) => {
      state.loader = false;
      state.orderCreate = action.payload;
    },
    [createdOrder.rejected]: (state, action) => {
      state.loader = true;
      state.errors = action.payload;
    }  ,

    [getUser.pending]: (state, action) => {
      state.loader = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.userInfo = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.loader = true;
      state.errors = action.payload;
      console.log(action.payload)
    },

    [getUserRegistered.pending]: (state, action) => {
      state.loader = true;
    },
    [getUserRegistered.fulfilled]: (state, action) => {
      state.loader = false;
      state.userInfo = action.payload;
    },
    [getUserRegistered.rejected]: (state, action) => {
      state.loader = true;
      state.errors = action.payload;
    },

    [getOnlyProduct.pending]: (state, action) => {
      state.loader = true;
    },
   
    [getOnlyProduct.rejected]: (state, action) => {
      state.loader = true;
      state.errors = action.payload;
    },  
     [getOnlyProduct.fulfilled]: (state, action) => {
      state.loader = false;
      state.searchProduct =action.payload;
    },
    
  }

});



export const { addProduct, removeProduct,cartShippingAddress,cartPaymentMethod,emptyCart,logout } = eCommerceSlice.actions;
export const selectCount = (state) => state.cart.basket;
export const selectProduct = (state) => state.cart.product;
export const selectUser = (state) => state.cart.userInfo;
export const ordercreated = (state) => state.cart.orderCreate;
export const shipAdd = (state) => state.cart.shippingAdress;
export const paymentM = (state) => state.cart.payment;
export const searchProduct = (state) => state.cart.searchProduct;

export default eCommerceSlice.reducer;