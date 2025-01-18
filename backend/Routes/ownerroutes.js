const express=require('express');
const router=express.Router();

const mongoose=require('mongoose');
const Owner = require('../Models/Owner');
const Menu = require('../Models/Menu');
const nodemailer=require('nodemailer');
const User = require('../Models/User');
const Order = require('../Models/Order');

router.post('/registerrestaurant',async (req,res)=>{
    let {image,name,address,opening,closing,ownerid}=req.body;
    console.log(ownerid);
    let restaurantalready=await Owner.find({ownerid});
    console.log(!restaurantalready);
    if(restaurantalready.length===0){//should be optimized .length
    try {
        let owner=await Owner.create({image:image
            ,name:name
            ,address:address,
            opening:opening,
            closing:closing,
            ownerid:ownerid});
        res.status(200).send(owner);
    } catch (error) {
        res.status(400).send(error.message);
    }}
    else{
        res.status(400).send({});
    }
    

})
router.post('/addmenu',async (req,res)=>{
    const {image,name,ingredients,price,ownerid}=req.body;
    
    let menu=await Menu.find({name,ownerid});
    console.log(menu);
    if(menu.length===0)
    {
        try {
            let resp= await Menu.create({
                image:image,
                name:name,
                ingredients:ingredients,
                price:price,
                ownerid:ownerid,
                stock:"true"
            })
            res.status(200).send(resp);
        } catch (error) {
             res.status(400).send(error.message)
        }
       

    }
    else{
        res.status(400).send("alredy exist");
    }
})
router.post('/getmenu',async (req,res)=>{
    let {ownerid}=req.body;
    try {
        let menu=await Menu.find({ownerid});
        res.status(200).send(menu);
    } catch (error) {
        res.status(400).send(error.message);
    }
    
    
})
router.post('/getrestaurantimg',async (req,res)=>{
    let {ownerid}=req.body;
    try {
        let restimg=await Owner.find({ownerid});
        console.log(restimg);
        res.status(200).send(restimg);
    } catch (error) {
        res.status(400).send(error.message);
    }
})
router.post('/getstock',async (req,res)=>{
    let {menuid}=req.body;
    try {
        let stock=await Menu.findById(menuid);
        res.status(200).send(stock);
    } catch (error) {
        res.status(400).send(error.message);
    }
    
    
})
router.patch('/stock/:id',async (req,res)=>{
    let {id}=req.params;
    let {stock}=req.body;
    console.log(stock);
    try {
        let resp=await Menu.findByIdAndUpdate(
            id,{stock}
        );
        await Menu.bulkSave()
        console.log(resp);
        res.status(200).send(resp);
    } catch (error) {
        res.send(error.message);
    }
    

})
router.get('/getrestaurant',async (req,res)=>{
    try {
        let restaurant=await Owner.find();
        res.status(200).send(restaurant);
    } catch (error) {
        res.status(400).send(error.message);
    }
    

})
router.post('/getrestaurantmenu',async (req,res)=>{
    let {ownerids}=req.body;
    const ownerid=ownerids
    try {
        let menu=await Menu.find({ownerid});
       
        res.status(200).json(menu);
    } catch (error) {
        res.status(400).json(error.message);
    }
    

})
router.post('/getuser',async (req,res)=>{
    const {customerid}=req.body;
    console.log(customerid);
    try {
        let user=await User.findById(customerid);
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        res.send(error.message)
    }
    
})
router.post('/ordered',async (req,res)=>{
    let {address,mobile,pincode,customerid,menuid,quantity}=req.body;
    
    try {
       let owner=await Menu.findById(menuid);
        console.log(owner);
        
            let ownerid=owner.ownerid;
            let order=await Order.create({
                address:address,
                mobile:mobile,
                pincode:pincode,
                customerid:customerid,
                menuid:menuid,
                ownerid:ownerid,
                quantity:quantity
            })
            res.json(order);
       
    } catch (error) {
        res.json(error.message)
    }
})
router.post('/getorder',async (req,res)=>{
    let {ownerid}=req.body;
    console.log(ownerid);
    try {
        const order=await Order.find({ownerid});
        console.log(order);
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send(error.messsage)
    }
    

})
router.post('/getordermenu',async (req,res)=>{
    let {menuid}=req.body;
    try {
        let menu=await Menu.findById(menuid);
        console.log(menu);
        res.send(menu);
    } catch (error) {
        res.send(error.message);
    }
})
router.post('/sendconfirmation',async (req,res)=>{
    let {customerid,productid,quantity}=req.body;
     const user=await User.findById(customerid);
     console.log(user);
     const product=await Menu.findById(productid);
    const config={
        service:'gmail',
        auth:{
            user:'ashishsinghrana39@gmail.com',
            pass:`${process.env.email_password}`
        }
    }
    const transporter=nodemailer.createTransport(config);
    let mail={
        from:'ashishsinghrana39@gmail.com',
        to:`${user.email}`,
        subject:"Validation",
        html:`<h1>You ordered ${product.name} for ${quantity*product.price}Rs </h1>`
    }
    transporter.sendMail(mail,(error,info)=>{
        if(error) {
            console.log(error.message);
        } else {
            console.log(info);
        }
    })
    
    res.json("sent confirmation");
   
})
module.exports=router;