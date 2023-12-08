import mongoose from "mongoose";
const fullstudentSchema = mongoose.Schema({
    id:{
        type:String,
        required:[true,"Please provide the id"],
        trim:true
    },
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    province:{
        type:String,
        required:true,
        trim:true
    },
    postal:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true,
        trim:true
    }
});
const fullstudent = mongoose.model("fullstudent", fullstudentSchema); // Define the Student model

export default fullstudent;