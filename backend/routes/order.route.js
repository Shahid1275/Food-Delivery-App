import express from "express";
import authMiddelware from "../middlewares/auth.js";
import { listOrder, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post('/place', authMiddelware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders',authMiddelware, userOrders);
orderRouter.get('/list', listOrder);
orderRouter.post('/status', updateStatus);




export default orderRouter;


