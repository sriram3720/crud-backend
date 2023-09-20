const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/enrollmentApp';

const connectDB =()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("mongodb is connected");
    }).catch((err)=>{
        console.log("mongodb connection is failed")
    })
}

module.exports = connectDB;
