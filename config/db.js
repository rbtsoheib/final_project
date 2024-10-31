import mongoose from "mongoose"


export const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.Connection.host}`);
    } 
    
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 means an errore but 0 means success
    }
}