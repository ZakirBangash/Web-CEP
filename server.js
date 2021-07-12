import express from 'express';
import mongoose from "mongoose";
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import dotenv from 'dotenv';
import cors from 'cors'

import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51JATreSEBOVDsL0WvhSEiC9Az9mxbAK2O7PBm85nrCsEU9UkeOtqJTXvpG2GDn7nMBGDU3FwMClixb7aoP3qNNJT009HZuN4D4');
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
// app config
const app = express();
const port = process.env.PORT || 8000;

const connectionURL = `mongodb+srv://admin:1rXVoTeV7RUEfb5L@cluster0.uipt4.mongodb.net/E-commerce?retryWrites=true&w=majority`;


// 1rXVoTeV7RUEfb5L

// db config
mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// for checking that database is connected or not
mongoose.connection.once('open', () => {
  console.log('Database is connected')
})



// middleware
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
// app.use(cors());


// db config



// for checking that database is connected or not


// api routes
app.get('/', (req, res) => {
  res.status(200).send("Hello World");
})

// app.get('/api/products', (req, res) => {
//         res.status(200).send(data.basket);
// })


// app.get('/sync', (req, res) => {

//     users.find((err, data) => {
//         if(err){
//             res.status(500).send(err)
//         }else{
//             res.status(200).send(data)
//         }
//     })
// })

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.post("/stripe", async (req, res) => {

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


  const { product, token } = req.body;
  const idempontencyKey = uuidv4();
console.log(product)

return stripe.customers.create({
  email: token.email,
  source: token.id
}).then(customer => {
  stripe.charges.create({
    amount: product.price * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: product.name,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }

  },{idempontencyKey}) 
}).then(result => res.status(200).json(result))
.catch(err => console.log(err)) 
})

// listen
app.listen(port, () => console.log(`Listening on local host ${port}`));