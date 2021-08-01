import React from 'react'
import CartProduct from '../CartProduct/CartProduct'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux';
import {selectCount } from '../../features/counter/eCommerceSlice'
import './Cart.css'
import cartSvg from './cartSvg.svg';
import emptyCart from './emptyCart.svg'


const Cart = () => {

    const basket = useSelector(selectCount);
    const Prices = basket.map(item => item.price);
    let subTotal = Prices.reduce((acc, item) => (acc += item), 0).toFixed(2);

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
                                key={i}
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
                                        <input type="checkbox" checked   name="" id="" /> :
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
