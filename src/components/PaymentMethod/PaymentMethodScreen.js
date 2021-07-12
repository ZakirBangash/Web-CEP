import React, { useState, useEffect } from 'react';
import {selectUser,cartPaymentMethod } from '../../features/counter/eCommerceSlice'
import CheckoutSteps from '../CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import './PaymentMethod.css'
import { useSelector, useDispatch } from 'react-redux';


export default function PaymentMethodScreen() {

  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const userInfo = useSelector(selectUser);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo.name == undefined) {
      navigate('/signin')
      }  
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault();
      dispatch(cartPaymentMethod(paymentMethod));
      navigate('/placeOrder');
  };

  return (
    <div className="paymentScreen">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div className="payment">
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div className="payment">
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}