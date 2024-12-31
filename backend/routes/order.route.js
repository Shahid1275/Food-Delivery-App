import express from "express";
import authMiddelware from "../middlewares/auth.js";
import { placeOrder } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post('/place', authMiddelware, placeOrder);

export default orderRouter;


