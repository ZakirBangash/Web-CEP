import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, selectCount,emptyCart } from '../features/counter/eCommerceSlice'
import stripeImg from './stripe.svg'
import './GatewayStripe.css'

const instance = axios.create({
    baseURL : "http://127.0.0.1:8000"
});

toast.configure();
const GatewayStripe = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
const onToken = async (token) => {
        console.log("onToken this is me")
    const product = {name:"All Products", price: 2343};
    const response = await instance.post('/stripe', {
        product,
        token
    });
 
  const {status} = response;
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
                stripeKey="pk_test_51JATreSEBOVDsL0W7t5E2Jrcik0BqSpzbe9kppTz8kOPgfgIRCVEmGJgZ7SqOA9BYzP7GjXiwaSKFR8ZAuCNhTep00jcYm3fp3"
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