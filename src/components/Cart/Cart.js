import React from 'react'
import CartProduct from '../CartProduct/CartProduct'
// import CartProduct from './CartProduct'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';

import { addProduct, removeProduct, selectCount } from '../../features/counter/eCommerceSlice'
import './Cart.css'
import cartSvg from './cartSvg.svg';
import emptyCart from './emptyCart.svg'

const useStyles = makeStyles({
    root: {
        Width: 100,
        margin: 10,
        padding: 10,
    },

});

const Cart = () => {

    const classes = useStyles();
    const basket = useSelector(selectCount);
    const Prices = basket.map(item => item.price);
    let subTotal = Prices.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log(subTotal)
    return (
        <div className="cart">
            {basket.length === 0 ? (
                <div className="empty-basket">
                    <h2>Your Shopping Basket is empty</h2>
                    <p> You have no items in your basket.
                        To buy one or more click on "Add to Basket"
                    </p>
                    <img className="emptyCartSvg" src={emptyCart} alt="" />
                </div>
            ) : (
                <div>
                    <h2 className="cart__title">Your Shopping Basket</h2>


                    <div className="cart-container">
                        <div className="left">
                            {basket.map((item, i) => (
                                <CartProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                        <div className="right">

                           
                             <Card className="card-checkout">
                                <CardContent className="card-content">
                                    <p>subTotal ( {basket.length}) : <strong>Rs: {subTotal}</strong></p>
                                    <div className="gift">
                                        {subTotal > 2000?
                                        <input type="checkbox"  name="" id="" /> :
                                        <input type="checkbox" disabled  name="" id="" />
                                        }
                                      
                                        <span>This order contains gift</span>
                                    </div>
                                    <Link className="link-to-btn" to="/shipping">
                                    <Button className="checkout-btn" variant="contained" >
                                        Proceed to checkout
                                    </Button>
                                    </Link>
                                    
                                </CardContent>
                            </Card> 
                            <img className="svg" src={cartSvg} alt="" />
                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}

export default Cart


// let error;
  // let status;

  // try {
  //   const { product, token } = req.body;

  //   console.log(product)
  //   console.log(token)
  //   const customer = await stripe.customers.create({
  //     email: token.email,
  //     source: token.id
  //   })

  //   const idempontencyKey = uuidv4();
  //   const charge = await stripe.charges.create({
  //     amount: product.price * 100,
  //     currency: 'usd',
  //     customer: customer.id,
  //     receipt_email: token.email,
  //     description: product.name,
  //     shipping: {
  //       name: token.card.name,
  //       address: {
  //         line1: token.card.address_line1,
  //         line2: token.card.address_line2,
  //         city: token.card.address_city,
  //         country: token.card.address_country,
  //         postal_code: token.card.address_zip
  //       }
  //     }

  //   },{idempontencyKey })

  //   status = 'success'

  // } catch (error) {
  //   console.log(error)
  //   status = 'error'
  // }

  // res.json(status);
