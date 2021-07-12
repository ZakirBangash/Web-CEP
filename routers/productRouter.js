import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
   // console.log(products)
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
     await Product.remove({});
    const createdProducts = await Product.insertMany(data.basket);
    res.send({ createdProducts });
  })
);

 productRouter.get(
   '/:id',
   expressAsyncHandler(async (req, res) => {
     const product = await Product.find({title:req.params.id});
     console.log(product)
     if (product.length) {
       res.send(product);
       console.log("server hai")
     } else {
       res.status(404).send({ message: 'Product Not Found' });
     }
   })
 );

export default productRouter;