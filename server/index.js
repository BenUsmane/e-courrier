import express  from "express";
import mongoose from "mongoose";
import { router as courrierRouter } from "./routes/courrier.js";
import { router as contactRouter } from "./routes/contact.js";

const app = express()
app.use('/courrier',courrierRouter)
app.use('/contact',contactRouter)

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://BenUsmane:python666920471usmane@cluster0.ak7bh.mongodb.net/test',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    app.listen(5572,()=>{
        console.log('app run well on port 5572')
    })
}).catch((error)=>{
    console.log(error)
})
