import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {emptyCart } from '../features/counter/eCommerceSlice'
import stripeImg from './stripe.svg'
import './GatewayStripe.css'

const instance = axios.create({
    baseURL : "http://127.0.0.1:8000"
});

toast.configure();
const GatewayStripe = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("ontoken")
const onToken = async (token) => {
    const product = {name:"All Products", price: 2343};
   const response = await instance.post('/stripe', {
        product,
        token
    }); 
    console.log(response)
 
  const {status} = response;
  console.log(status)
    if(status == 200){
        dispatch(emptyCart())
        navigate('/')
        toast.success("You have paid successfully", {position: toast.POSITION.TOP_RIGHT})
    }
}
    return (
        <div>
            <div className="container">
                <img src={stripeImg} className="stripe-img" alt="" />
            
            <div className="stripe-btn">
            <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51JATreSEBOVDsL0WOGvJDCqj6edQ1DeEkYD6a8NAxhWUA3lgQ0XsXeLnNAgXbcCBp7iQ4b3gEKAfrLXapWzx27z900FrbXZspN"
                amount={3343 * 100}
                billingAddress
                shippingAddress
            />
            </div>
                </div>
        </div>
    )
}


export default GatewayStripe