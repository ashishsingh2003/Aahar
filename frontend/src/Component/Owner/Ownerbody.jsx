import React, { useEffect, useState } from 'react'
import bgImage from '../../Images/Ownerback.jpg'
import Order from './Order';
import axios from 'axios'
import { Ownerrole } from '../../context/Ownerid';
function Ownerbody() {
  const [orders,setorders]=useState([]);
  const {ownerid}=Ownerrole();
  useEffect(()=>{
    const fetchorders=async ()=>{
    try {

       let res=await axios.post('http://localhost:8080/getorder',{ownerid});
       console.log(res);
       setorders(res.data);
    } catch (error) {
      console.log(error.message);
    }}
    fetchorders();
  },[])
  return (
    <div className='bg-center bg-cover min-h-screen flex justify-center ' style={{backgroundImage:`url(${"https://wallpapercave.com/wp/wp2723829.jpg"})`}}>

             <ul>
              {
                orders.map((item,id)=>{
                  return (<li key={id} ><Order menuid={item.menuid} quantity={item.quantity} address={item.address} pincode={item.pincode} mobile={item.mobile}/></li>)
                })
              }
             </ul>
             
    </div>

  )
}

export default Ownerbody