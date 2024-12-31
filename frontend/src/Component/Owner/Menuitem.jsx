import React, { useEffect, useState } from 'react'
import { Ownerrole } from '../../context/Ownerid'
import axios from 'axios';
function Menuitem(props) {
  // 1rem=16px 1rem=4 unit of tailwind
  let [stockavail,setstockavail]=useState("true");
  let ownerid=Ownerrole();
  useEffect(()=>{
    const getstock=async ()=>{
      try {
        let menuid=props.id;
        let res=await axios.post('http://localhost:8080/getstock',{menuid});
        console.log(res.data);
       setstockavail(res.data.stock);
      } catch (error) {
        console.log(error.message);
      }
      
    }
    getstock();
  },[stockavail])
  const instock =async (e)=>{
    e.preventDefault();
  
    let menuid=props.id;
    console.log(menuid);
  
    try {
      let res=await axios.patch(`http://localhost:8080/stock/${menuid}`,{stock:"true"});
      console.log(res);
      setstockavail(res.data.stock);
    } catch (error) {
      console.log(error.message);
    }
    
  }
  const outstock =async (e)=>{
    e.preventDefault();
   
    let menuid=props.id;
    
    try {
      let res=await axios.patch(`http://localhost:8080/stock/${menuid}`,{stock:"false"});
      console.log(res);
      setstockavail(res.data.stock);
    } catch (error) {
      console.log(error.message);
    }
    
  }

  return (
    <div className='bg-opaque bg-green-300 bg-opacity-50 ml-0 w-192 h-32 m-4 shadow-md mb-2 rounded-lg border px-4 py-2 flex justify-between items-center justify-center'>
       <div>
        <img className="max-h-200 h-36 w-40 p-4 rounded-lg " src={props.image} alt="" />
       </div>
       <div>
        <h1 className='text-2xl font-bold-md '>{props.name} <span className='text-white'>{stockavail=="false"? "Not available":""}</span></h1>
        <p className='mt-3'>{props.price} Rs.</p>
        <button onClick={instock} className='px-4 py-2 rounded-lg bg-green-800 mt-2'>In-stock</button>
        <button onClick={outstock}className='px-4 py-2 rounded-lg bg-red-600 mx-2 mt-2'>Out-stock</button>
       </div>
      
       
     
    </div>
  )
}

export default Menuitem