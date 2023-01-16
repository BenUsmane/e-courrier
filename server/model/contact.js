import mongoose, { mongo } from "mongoose";
const contactSchema = mongoose.Schema({
    nom : {
        type : String,
        required : true,
        trim : true,
    },
    prenom : {
        type : String,
        required : true,
        trim : true,
    },
    adress_mail : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    telephone : {
        type : Number,
        required : true,
        trim : true,
        unique : true
    },
    compagnie : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        trim : true
    }
})

const contact = mongoose.model('contact', contactSchema)

export {contact}