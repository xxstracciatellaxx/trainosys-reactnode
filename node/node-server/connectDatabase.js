import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://jannel:7pLRSlYtfApWRmeg@cluster0.pinr6.mongodb.net/';
        const result = await mongoose.connect(uri);
        console.log('Hello')
    } catch (error) {
        // console.error(error)
        console.log("MongoDB connection error.")
        process.exit(1);
        
    }
}
export default connectDB;