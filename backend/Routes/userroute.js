const express= require('express');
const router=express.Router();
const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const User=require('../Models/User.js');

//-------------------------Signup-------------------------------------
router.post('/signup',async (req,res)=>{
    const {username,email,password,role}=req.body;
    const emailexist=await User.findOne({email});
    if(emailexist)
    {
        res.status(400);
        throw new Error("eamil is already registered");
    }
    else{
        const hashpassword=await bcrypt.hash(password,10);
        const user=await User.create({
            username:username,
            email:email,
            password:hashpassword,
            role:role
        })
        if(hashpassword)
        {
            res.send("true");
        }
        else{
            res.send("false");
        }
    }
    
})

//------------------------------Login-----------------------------------
router.post('/login',async (req,res)=>{
    
   const {email,password,role}=req.body;
   const userexist=await User.findOne({email});
   console.log(userexist);
   console.log(password);
   console.log(role);
   console.log(email);
   if(userexist)
   {
    try {
        const hashpassword=userexist.password;
        const ismatch=await bcrypt.compare(password,hashpassword);
        console.log(ismatch);
        if(!ismatch)
        {
          res.status(400).send('false');
        }
        else{
        res.status(200).send(userexist);}
    } catch (error) {
        res.send(error.message);
    }
     
   }
   else{
    
    res.status(200).send("false");
   }
})

module.exports= router;