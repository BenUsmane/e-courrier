import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nom : {
        type : String,
        required : true,
        trim : true
    },
    prenom : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    user_name :{
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        trim : true,
        min : 4
    },
    email_recu : [{
        type : mongoose.Schema.Types.ObjectId,
    }],
    email_envoie : [{
        type : mongoose.Schema.Types.ObjectId,
    }]
})
const user = mongoose.model('user', userSchema)
export { user}