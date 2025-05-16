import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from "./config/db.js"
import foodRouter from './routes/food.route.js';
import userRouter from './routes/user.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

const app = express();

const PORT = process.env.PORT || 3000;

// middlware

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust to your frontend port
  credentials: true,
}));
app.use(express.json());
// DB Connection
connectDB();

// API
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart/', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res)=>{
    res.send("I am root!");
});


app.listen(PORT, ()=>{
    console.log(`Server is runing on ${PORT}`);
    ;
})

