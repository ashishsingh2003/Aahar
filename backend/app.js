const dotenv=require('dotenv');
dotenv.config("");
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.urlencoded({extended:true}));
const userroute  = require('./Routes/userroute');
const ownerroutes  = require('./Routes/ownerroutes');
const cors=require('cors');
mongoose.connect('mongodb://127.0.0.1:27017/Aahar')
.then(()=>{
    console.log("db connected");
})
.catch((error)=>{
    console.log(error.message);
})
app.use(cors({ 
    origin:['http://localhost:5173'],
    credentials:true,
    methods:["GET","POST","PATCH","DELETE"],
    headers: ["Content-Type", "Authorization", "Origin", "Accept"]
}));
app.use(express.json());
app.use(userroute);
app.use(ownerroutes);
app.listen('8080',()=>{
    console.log("server connected");
})
require("dotenv").config();
const stripe=require("stripe")(process.env.SECRET_STRIPE_KEY)
app.post('/checkout',async (req,res)=>{
    
    try {
        
        const session=await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items:req.body.items.map(item=>{
                return {
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:item.name
                        },
                        
                        unit_amount:(item.price)*100,
                    },
                  
                    quantity:item.quantity
                }
               
               
            }),
           
              
              
            success_url:`http://localhost:5173/successfull/${req.body.items[0].id}/${req.body.items[0].quantity}`,
            cancel_url:"http://localhost:5173/menu"

        })
       
        res.json({url:session.url})
    } catch (error) {
        console.log("can not pay");
        console.log(error.message);
        res.json({error:error.message});
    }
})