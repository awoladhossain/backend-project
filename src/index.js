// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/dbIndex.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})




connectDB()



// this is the first apporch to connect db
/*
import express from "express";
const app = express()

    (async () =>
    {
        try
        {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", (error) =>
            {
                console.log("Error: ", error)
                throw error
            })
            app.listen(process.env.PORT, () =>
            {
                console.log(`App is listening on port ${process.env.PORT}`)
            })
        } catch (error)
        {
            console.log(error)
            throw error
        }
    })()
    */