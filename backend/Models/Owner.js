const mongoose=require('mongoose');
const ownerschema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        
      
    },
    opening:{
        
            type: String, required: true, match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/ 
    },
    closing:{
        type: String, required: true, match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/ 
    },
    ownerid:{
        type:String,
        required:true
    }

})
const Owner = mongoose.model('Owner', ownerschema);

module.exports = Owner;