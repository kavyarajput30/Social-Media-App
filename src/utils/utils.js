
import mongoose from 'mongoose';

const main = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default main;