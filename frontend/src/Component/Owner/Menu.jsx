import React, { useEffect, useState } from 'react'
import { Ownerrole } from '../../context/Ownerid';
import axios from 'axios';
import Menuitem from './Menuitem';
function Menu() {
  const [menu,setmenu]=useState([]);
  let [img,setimg]=useState();
  let {ownerid}=Ownerrole();
  useEffect(()=>{
    const fetchmenu=async()=>{
      try {
        let res=await axios.post('http://localhost:8080/getmenu',{ownerid});
        console.log(res);
         setmenu(res.data);
        
      } catch (error) {
        console.log(error.message);
      }
    }
    const restimg=async ()=>{
      let res2=await axios.post('http://localhost:8080/getrestaurantimg',{ownerid});
        console.log(res2);
        setimg(res2.data[0].image);
    }
    restimg();
    
   fetchmenu();
  },[])
  
  return (
    <div className='font-sans min-h-screen bg-cover bg-contain bg-center' style={{backgroundImage:`url(${img})`}}>
      <div className=''>
        <h1 className='font-sans text-3xl text-center font-bold text-white'> Menu of Our Restaurant</h1>
        </div>
        <div >
        <ul>
        {
        menu.map((item,id)=>{
            return <li key={item._id}><Menuitem  id={item._id} image={item.image} name={item.name} price={item.price}/></li>
        })
        }
        </ul></div>
      
    </div>
  )
}

export default Menu