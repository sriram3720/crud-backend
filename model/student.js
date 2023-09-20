const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    id: {
        type: Number,       
        required: true,      
        unique: true,        
        min: 1,             
      },   
    name: {
        type: String,
        required: true,
        minlength: 3, 
      },
      dob: {
        type: String,                
        required: true,             
         
      },
      course: {
        type: String,
        enum: ['EEE', 'ECE', 'IT', 'CSE', 'BME','MECH'],
        required: true,
      },
      phoneno: {
        type: String, 
        required: true,
      },
      
})
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
