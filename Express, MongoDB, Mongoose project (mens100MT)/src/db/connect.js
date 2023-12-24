const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/olymics";

mongoose.connect(url).then(()=>{console.log("MongoDB Connection Sussefull")}).catch((e)=>{console.log("MongoDB Connection Faild");})