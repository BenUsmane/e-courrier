import mongoose, { mongo } from "mongoose";

const courrierSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    date_envoie : {
        type : Date,
        required : true,
    },
    destinateur : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'user'
    }
})

const courrier = mongoose.model('courrier',courrierSchema)
export {courrier}

