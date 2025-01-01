const express=require('express');
const router=express.Router();

const mongoose=require('mongoose');
const Owner = require('../Models/Owner');
const Menu = require('../Models/Menu');

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
module.exports=router;