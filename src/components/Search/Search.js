import React, { useEffect, useState } from 'react'
import './Search.css'
import Divider from '@material-ui/core/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../../features/counter/eCommerceSlice'
import Button from '@material-ui/core/Button';
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import imageSvg from './404.svg';

const Search = () => {
    const product = useSelector(searchProduct);

    const override = css`
    display: flex;
    justify-content:center;
    align-items:center;
    margin:0 auto;
    border-color: red;
  `;

    useEffect(() => {
    }, [product])

    return (
        <div className="searchPage">

            {product.length == 0 ? (        
                <PuffLoader color='#9013FE' loading={true} css={override} size={50} />
            ):(
                product.message ? <div className="search-notFound">
                    
                            <h1>Not Found</h1>
                            <img className="imgSvg" src={imageSvg} alt="" />
                      </div>:
                <>
                <div className="searchPage__filter">
                <h4>Search for "{product[0].title}"</h4>
            </div>

            <div className="searchPage__divider">
                <Divider />
            </div>
            <div className="content">

                <div className="left">
                    <img src={product[0]?.image} alt="" />
                </div>
                <div className="right">
                    <h1 className="right-title">{product[0]?.title}</h1>
                    <Divider />
                    <p className="right-price">Price : {product[0]?.price}</p>
                    <Button className="right-btn">Add to Basket</Button>
                </div>
            </div>
                </>
            )}

        </div>
    )
}

export default Search;