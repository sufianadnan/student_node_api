import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connection established");
        console.log("Connected to host:", connection.connection.host);
        console.log("Database name:", connection.connection.name);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

export default connectDB;
