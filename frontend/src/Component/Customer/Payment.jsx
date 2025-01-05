import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Customerrole } from '../../context/Customerid'
function Payment() {
    let {customerid}=Customerrole();
    console.log(customerid);
    const [user,setuser]=useState();
    useEffect(()=>{
        const getuser=async ()=>{
            try {
                let res=await axios.post('http://localhost:8080/getuser',{customerid})
                console.log(res);
                setuser(res.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getuser();
    },[])
    useEffect(()=>{
        const sendconfirmation=async ()=>{
            const email=user.email;
            try {
               let res= await axios.post('http://localhost:8080/sendconfirmation',{email})
               console.log(res);
            } catch (error) {
                console.log(error.message);
            }
        
        }
        sendconfirmation();
    },[])
  return (
    <div>Payment</div>
  )
}

export default Payment