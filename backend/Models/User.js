const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password:{
        type:String,
        required:true,
        minlength:4,
      
    },
    role:{
        type:String,
        required:true,
    }

})
const User = mongoose.model('User', userschema);

module.exports = User;