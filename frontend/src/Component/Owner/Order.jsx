import React, { useEffect, useState } from 'react'
import bgImage from '../../Images/fooditem.jpg'
import axios from 'axios'
function Order(props) {
 const [menu,setmenu]=useState();
 const menuid=props.menuid;
 console.log(menuid);
  useEffect(()=>{
      const fetchmenu=async()=>{
        try {
          let res=await axios.post('http://localhost:8080/getordermenu',{menuid});
          console.log(res);
          setmenu(res.data.name);
        } catch (error) {
          console.log(error.message);
        }
      }
      fetchmenu()

  },[])
  return (
    <div className='border bg-green-300 bg-opacity-70 ml-0 w-[44rem] min-h-32 m-4 shadow-md mb-2 rounded-lg text-white px-4 py-2 bg-center bg-cover ' style={{backgroundImage:`url(${bgImage})`}}>
    
    <div className=''>
     <h1 className='text-2xl font-bold-md '>{menu} </h1>
     <p className='mt-3'>{props.quantity}</p>
     <p className='mt-3'>{props.address}</p>
     <p className='mt-3'>{props.pincode}</p>
     <p className='mt-3 inline'>{props.mobile}</p>
     <button className='px-2 py-1 bg-blue-500 rounded-lg m-2 hover:bg-blue-600'>Deliver</button>
     </div>
    
  
 </div>
  )
}

export default Order