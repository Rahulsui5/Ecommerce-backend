// import express from 'express'
// import colors from 'colors'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import connection from './config/db.js'
// import ProductRouter from './router/ProductRouter.js'
// import userRouter from './router/UserRouter.js'
// import CartRouter from './router/CartRouter.js'
// import OrderRouter from './router/OrderRouter.js'
// import Razorpay from "razorpay";
// dotenv.config()
// export const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID, 
//   key_secret: process.env.RAZORPAY_SECRET, 
// });
// const app=express()
// app.use(express.json())
// app.use(cors())
// await connection()
// app.use(ProductRouter)
// app.use(userRouter);
// app.use(CartRouter)
// app.use(OrderRouter)

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Razorpay from "razorpay";

import connection from "./config/db.js";
import ProductRouter from "./router/ProductRouter.js";
import userRouter from "./router/UserRouter.js";
import CartRouter from "./router/CartRouter.js";
import OrderRouter from "./router/OrderRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

connection();

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

app.use(ProductRouter);
app.use(userRouter);
app.use(CartRouter);
app.use(OrderRouter);

export default app;