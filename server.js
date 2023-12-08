import express from "express";
import dotenv from "dotenv";
import studentRoute from "./routes/studentRoute.js";
import fullstudentRoute from "./routes/fullstudentRoute.js";

import { errorHandler } from "./middleware/errorHandle.js";
import connectDb from "./config/dbConnection.js";

const app = express();

app.use(express.json());
app.use("/api/student",studentRoute);
app.use("/api/fullstudent",fullstudentRoute);

app.use(errorHandler);
dotenv.config();
const port=process.env.PORT||5000;
connectDb();


app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});

