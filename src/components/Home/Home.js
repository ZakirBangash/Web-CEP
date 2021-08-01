import React, { useEffect} from "react";
import "./Home.css";
import Product from "../Product/Product";
import Carousel from '../Carousel/Carousel'
import { useSelector, useDispatch } from 'react-redux';
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { getProducts } from "../../app/actions/productActions";
import {selectProduct } from '../../features/counter/eCommerceSlice';
import Footer from "../Footer/Footer";


const override = css`
  display: flex;
  justify-content:center;
  align-items:center;
  border-color: red;
`;

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  
  return (
    <div className="home">
      <Carousel />
      <PropagateLoader color='#9013FE' loading={!products.length} css={override} size={25} />
      <div className="home__row">
      
      {products.map((product, id) => (
        <Product key={id}
        id={product._id}
        title={product.title}
        price={product.price}
        rating={product.rating}
        image={product.image}
      />

      ))}
                    
      </div>
     {products.length &&  <Footer />} 
    </div>
  );
};

export default Home;