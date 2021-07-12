import React,{useEffect,useState} from 'react';
import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps';
import { selectCount,selectUser, shipAdd, paymentM,} from '../../features/counter/eCommerceSlice';
import './PlaceOrder.css'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router';

export default function PlaceOrderScreen(props) {
  

  const shippingAddress = useSelector(shipAdd);
  const userInfo = useSelector(selectUser);
  const basket = useSelector(selectCount);
  const paymentMethod = useSelector(paymentM);
  let navigate = useNavigate();


  useEffect(() => {
    if (userInfo.name == undefined) {
      console.log("zakir")
      navigate('/signin')
      }  
  }, [userInfo])

  let itemsPrice = 3535;
  let shippingPrice = 35235;
  let taxPrice = 234;


    const Prices = basket.map(item => item.price);
    let subTotal = Prices.reduce((acc, item) => (acc += item), 0).toFixed(2);


    let TotalPrice  = subTotal + shippingPrice + taxPrice;

  
  return (

    <div className="placeOrderPage">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="placeOrder">


        <div className="order-left">
          <Card className="order-card">
            <CardContent>
              <h2>Shipping</h2>
              <p>
                <strong>Name:</strong> {shippingAddress[0]?.fullName} <br />
                <strong>Address: </strong> {shippingAddress[0]?.address}
              </p>

            </CardContent>
          </Card>
          <Card className="order-card">
            <CardContent>
              <h2>Payment</h2>
              <p>
                <strong>Method:</strong> {paymentMethod}
              </p>

            </CardContent>
          </Card>

          <Card className="order-card">
            <CardContent>
              <h2>Order Items</h2>
              {basket.map((item, i) => (
                <img
                src={item.image}
                alt={item.name}
                className="small"
             />
              ))}
                                       
            </CardContent>
          </Card>

        </div>
              <div className="order-right">
                <Card>
                  <CardContent className="order-content">
                    <h2>Order Summary</h2>
                    <p><strong>Items</strong> ${subTotal}</p>
                    <p><strong>Shipping Price</strong> ${shippingPrice}</p>
                    <p><strong>Tax</strong> ${taxPrice}</p>
                    <p><strong>Order Total</strong> ${TotalPrice}</p>
                    <Button className="order-btn"> <Link to="/stripe">Place Order</Link></Button>
                  </CardContent>
                </Card>
              </div>
    </div>

    </div>

  );
}