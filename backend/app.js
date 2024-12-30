const express=require('express');
const mongoose=require('mongoose');
const app=express();
const userroute  = require('./Routes/userroute');
const ownerroutes  = require('./Routes/ownerroutes');
const cors=require('cors');
mongoose.connect('mongodb://127.0.0.1:27017/dummy')
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