import mongoose from 'mongoose'

const DBConnection = 'mongodb://127.0.0.1:27017/food-delivery';


const connectDB = async () => {
    await mongoose.connect(DBConnection);
}

connectDB().then(()=>{
    console.log("Database Conected");
    
}).catch((error)=>{
    console.log(error);
    
});

export default connectDB;