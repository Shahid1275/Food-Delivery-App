import express from "express";
import authMiddelware from "../middlewares/auth.js";
import { placeOrder, userOrders, verifyOrder } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post('/place', authMiddelware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders',authMiddelware, userOrders);



export default orderRouter;


