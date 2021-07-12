import React from "react";

import "./Product.css";
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
 
import { useSelector, useDispatch } from 'react-redux';
import { addProduct,selectCount} from '../../features/counter/eCommerceSlice'
import Button from '@material-ui/core/Button';




const useStyles = makeStyles({
    root: {
      Width: 200,
      margin: 10
    },

  });

const Product = ({ id, title, price, rating, image }) => {
    const classes = useStyles();

    const dispatch = useDispatch();    

    const basket = useSelector(selectCount);


    const addToBasket = () => {
        console.log(id)
        dispatch(addProduct({
            id,
            title,
            price,
            rating,
            image
        }));
    }
    


    return (
            <Card className={`${classes.root} product-card`} variant="outlined">
                <div className="card-img">
                <img src={image} alt={title} />
                </div>
                 
                <CardContent  className="product">

               
                    <div className="product__info">
                        <p className="product-title">{title}</p>
                        <div className="product__price">
                            <small>$</small>
                            <strong>{price}</strong>
                        </div>

                        <div className="product__rating">
                            {Array(rating)
                                .fill()
                                .map((_) => (
                                    <p>⭐</p>
                                ))}
                        </div>
                    </div>

                    <Button onClick={addToBasket}>Add to Basket</Button>
                    



    </CardContent>

     </Card>    

    );
};

export default Product;


