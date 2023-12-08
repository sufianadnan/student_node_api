import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
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
    mobile:{
        type:String,
        required:true,
        trim:true
    }
});
const Student = mongoose.model("Student", studentSchema); // Define the Student model

export default Student;