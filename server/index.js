import express  from "express";
import { router as courrierRouter } from "./routes/courrier.js";

const app = express()
app.use('/courrier',courrierRouter)
app.listen(5572,()=>{
    console.log('app run well on port 5572')
})