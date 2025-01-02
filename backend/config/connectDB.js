import mongoose from 'mongoose'

const DBConnection = process.env.DB_CONNECTION;


const connectDB = async () => {
    await mongoose.connect(DBConnection);
}

connectDB().then(()=>{
    console.log("Database Conected");
    
}).catch((error)=>{
    console.log(error);
    
});

export default connectDB;