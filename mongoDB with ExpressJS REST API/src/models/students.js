const mongoose = require("mongoose");
const validator = require("validator");


/// Schema Create

const studentsSchema = mongoose.Schema({

    name: {
        type:String,
        required: true,
        minlength : 3,
    },
    email: {
        type:String,
        required : true,
        unique: [true, "Email already present"],
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:[10,'Number Minimum 10 digit'],
        // max:[10, 'Number max 10 digit'], 
    },
    address:{
        type:String,
        required:true,

    }
});

/// Models or collection Create 

const Student = new mongoose.model('Student',studentsSchema);

module.exports = Student;