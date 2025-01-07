import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Customerrole } from '../../context/Customerid'
import { useParams } from 'react-router-dom';
function Payment() {
    let {customerid}=Customerrole();
    let params=useParams();
    console.log(customerid);
    let addressref=useRef();
    let pincoderef=useRef();
    let mobileref=useRef();
    const order=async (e)=>{
    e.preventDefault();
    const address=addressref.current.value;
    const mobile=mobileref.current.value;
    const pincode=pincoderef.current.value;
    const menuid=params.productid;
    const quantity=params.quantity;
    try {
      let res=await axios.post('http://localhost:8080/ordered',{address,mobile,pincode,customerid,menuid,quantity});
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }

  }
  //   const orderfun=useCallback(()=>{
  //     const sendconfirmation=async ()=>{
            
  //       try {
  //          let res= await axios.post('http://localhost:8080/sendconfirmation',{customerid,productid:params.productid,quantity:params.quantity})
  //          console.log(res);
  //       } catch (error) {
  //           console.log(error.message);
  //       }
    
  //   }
  //   sendconfirmation();
  //   },[])
  //  orderfun();

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-96 space-y-4 h-42 shadow-md p-4'>
           <h1 className='text-2xl font-bold text-center'>Shipping Details</h1>
           <div className='p-2'>
            <label className='block ' htmlFor="address">Street address:</label>
            <input ref={addressref}className='border w-full w-md px-4 py-2 rounded-lg' type="text" id="address"/>
           </div>
           <div className='p-2'>
            <label className='block' htmlFor="number">Mobile no.:</label>
            <input ref={mobileref} className='border w-full w-md px-4 py-2 rounded-lg' type="text" id="number"/>
           </div>
           <div className='p-2'>
            <label className='block' htmlFor="pincode">Pincode:</label>
            <input ref={pincoderef}className='border w-full w-md px-4 py-2 rounded-lg' type="text" id="pincode"/>
           </div>
           <button onClick={order} className='px-4 py-2 w-full w-md bg-blue-400 hover:bg-blue-600'>Order</button>
      </div>
    </div>
  )
}

export default Payment