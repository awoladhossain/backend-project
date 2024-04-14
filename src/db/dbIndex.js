import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>
{
    try
    {
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb Connected !! DB HOST:${connectionIntance.connection.host}`);
    } catch (error)
    {
        console.log("Mongodb connection error: ", error)
        process.exit(1)
    }
}

export default connectDB