const mongoose=require('mongoose');
const orderschema=new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        min:10

    },
    menuid:{
        type:String,
        required:true
    },
    customerid:{
        type:String,
        required:true
    },
    ownerid:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
})
const Order=mongoose.model('Order',orderschema);
module.exports=Order;