import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/connectDB.js';
import foodRouter from './routes/food.route.js';
import userRouter from './routes/user.route.js';

const app = express();

const PORT = 3100;

// middlware

app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// API
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);

app.get('/', (req, res)=>{
    res.send("I am root!");
});


app.listen(PORT, ()=>{
    console.log(`Server is runing on ${PORT}`);
    ;
})

