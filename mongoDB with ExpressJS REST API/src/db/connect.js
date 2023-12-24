const mongoose = require("mongoose");

const url = 'mongodb://127.0.0.1:27017/students-api'
mongoose.connect(url)
        .then(()=>{
            console.log("mongoDB Connected");
        })
        .catch((error)=>{
            console.error("mongoDB Connection" ,error);
        })
