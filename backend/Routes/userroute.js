const express= require('express');
const router=express.Router();
const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const User=require('../Models/User.js');
const jwt=require( "jsonwebtoken");
let keytoken="Ashish";
let token;
const generateTokenAndSetCookie = (userId, res) => {
      token = jwt.sign({ userId },keytoken , {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: "development" !== "development",
	});
};
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
        generateTokenAndSetCookie(user._id,res);
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
        generateTokenAndSetCookie(userexist._id, res);
        if(!ismatch)
        {
          res.status(400).send('false');
        }
        else{
            res.status(200).json({
                _id: userexist._id,
                 username: userexist.username,
                 role:userexist.role,
                 token:token
            });
        }
    } catch (error) {
        res.send(error.message);
    }
     
   }
   else{
    
    res.status(200).send("false");
   }
})


// export default generateTokenAndSetCookie;
module.exports= router;