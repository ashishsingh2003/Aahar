const mongoose=require('mongoose');
const menuschema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        
    },
    ingredients:{
        type:String,
        required:true,
        
      
    },
    price:{
        type:String,
        required:true,
    },
    ownerid:{
        type:String,
        required:true
    }

})
const Menu = mongoose.model('Menu', menuschema);

module.exports = Menu;