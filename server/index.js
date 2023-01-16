import express  from "express";
import mongoose from "mongoose";
import { router as courrierRouter } from "./routes/courrier.js";

const app = express()
app.use('/courrier',courrierRouter)
mongoose.connect('mongodb+srv://BenUsmane:<python666920471usmane>@cluster0.ak7bh.mongodb.net/test',)
app.listen(5572,()=>{
    console.log('app run well on port 5572')
})