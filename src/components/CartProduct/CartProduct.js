import React from 'react'
import './CartProduct.css'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, selectCount } from '../../features/counter/eCommerceSlice'
import Button from '@material-ui/core/Button';

const CartProduct = ({id,title,price,rating,image}) => {
    const dispatch = useDispatch();    



const removeFromBasket = () => {
    console.log(id)
    dispatch(removeProduct(id));
}

    return (
        <div className="cartProduct">
            <img className="cartProduct__image" src={image} alt=""/>
            <div className="cartProduct__info">
                <h4 className="cartProduct__title">{title}</h4>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                    <div className="cartProduct__rating">
                        {Array(rating).fill().map((_,i) =>(
                            <p>✨</p>
                        ))}
                    </div>
                   
               
                <Button onClick={removeFromBasket}>Remove from basket</Button>
            </div>
        </div>
    )
}

export default CartProduct